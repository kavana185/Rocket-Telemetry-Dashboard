import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let rocketObj;
let scene, camera, renderer, controls;
let trajectoryLine;

export function initTrajectory(data) {
  const canvas = document.getElementById("trajectoryCanvas");

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  camera = new THREE.PerspectiveCamera(
    60,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 20, 300);

  renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 50;
  controls.maxDistance = 500;
  controls.maxPolarAngle = Math.PI / 2;

  // Lights
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 20, 10);
  scene.add(light);

  // --- Static gray trajectory line (preview) ---
  if (data.length > 0) {
    const pathPoints = data.map(d => new THREE.Vector3(d.x, d.y, d.z));
    const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
    const pathMaterial = new THREE.LineBasicMaterial({
      color: 0x555555,   // muted gray
      transparent: true,
      opacity: 0.5
    });
    const fullTrajectory = new THREE.Line(pathGeometry, pathMaterial);
    scene.add(fullTrajectory);
  }

  // --- Dynamic white line that grows behind rocket ---
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.8
  });
  trajectoryLine = new THREE.Line(geometry, material);
  scene.add(trajectoryLine);

  // Load rocket model
  const loader = new OBJLoader();
  loader.load("/models/rocket.obj", (obj) => {
    rocketObj = obj;
    rocketObj.scale.set(0.09, 0.09, 0.09);
    rocketObj.rotation.x = -Math.PI / 2; // or try .z if it's rotated wrong
    // ✅ Center pivot at model’s midpoint
  const box = new THREE.Box3().setFromObject(rocketObj);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  // Move pivot so the rocket rotates/moves around its middle
  rocketObj.position.sub(center);

  // Optionally, shift upward so it sits on ground (instead of halfway buried)
  rocketObj.position.y += size.y / 2;
    scene.add(rocketObj);
  });

  // Ground plane
  const groundGeometry = new THREE.PlaneGeometry(500, 500);
  const groundMaterial = new THREE.MeshPhongMaterial({
    color: 0x222222,
    side: THREE.DoubleSide,
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  scene.add(ground);

  // Launch + landing markers
  if (data.length > 0) {
    const start = data[0];
    const launchMarker = new THREE.Mesh(
      new THREE.SphereGeometry(2, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    launchMarker.position.set(start.x, start.y, start.z);
    scene.add(launchMarker);

    const end = data[data.length - 1];
    const landingMarker = new THREE.Mesh(
      new THREE.SphereGeometry(2, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    landingMarker.position.set(end.x, end.y, end.z);
    scene.add(landingMarker);
  }

  animate();
}

// Update rocket’s position + growing trail
export function updateRocket(frameData, index, fullData) {
  if (rocketObj && frameData) {
    rocketObj.position.set(frameData.x, frameData.y, frameData.z);

    const partialPoints = fullData
      .slice(0, index + 1)
      .map((d) => new THREE.Vector3(d.x, d.y, d.z));

    trajectoryLine.geometry.setFromPoints(partialPoints);
  }
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
