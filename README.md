# 🚀 Rocket Telemetry Dashboard

An interactive **3D Rocket Trajectory Visualization and Telemetry Dashboard** built with **Three.js, Chart.js, and JavaScript**.  
It simulates rocket flight data, renders a 3D trajectory path, and provides live telemetry stats such as velocity, altitude, acceleration, pressure, and more.

---

## ✨ Features
- 📈 **Real-time Telemetry Charts** (Velocity, Altitude, Acceleration, Temperature, Pressure).
- 🌍 **3D Rocket Trajectory Visualization** using **Three.js**.
- 🎮 **Interactive Camera Controls** (OrbitControls – rotate, zoom, and pan with cursor).
- 🚀 **OBJ Rocket Model** following the trajectory path.
- 🟢 **Launch & Landing Markers** (Green = launch, Red = landing).
- 🟦 **Ground Plane** to visualize launch site.
- ⏯️ **Playback Controls** (Play, Pause, Rewind, Time Slider).

---

## 📂 Project Structure
Rocket-Telemetry-Dashboard/
│── index.html # Main dashboard UI
│── style.css # Styling
│── script.js # Main dashboard logic
│── trajectory.js # 3D rocket + path rendering
│── playback.js # Playback controls
│── flight1.json # Sample flight data
│── models/ # 3D rocket model (.obj, .mtl, textures)
│── assets/ # (optional) images, icons


---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/kavana185/Rocket-Telemetry-Dashboard.git
cd Rocket-Telemetry-Dashboard
```
###2️⃣ Run locally

You’ll need a local server (because Three.js & model loading won’t work from file://).
For example, using Python:
```
# Python 3
python -m http.server 8000
```
Then open 👉 http://localhost:8000

###3️⃣ Explore the Dashboard
Play / pause the rocket flight.
Use your mouse to rotate & zoom the 3D scene.
Watch telemetry data update in real time.

##🛠️ Built With

Three.js
 – 3D rendering

Chart.js
 – Live charts

[JavaScript, HTML, CSS]
