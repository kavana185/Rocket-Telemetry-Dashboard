# 🚀 Rocket Telemetry Dashboard  

An interactive **3D Rocket Trajectory Visualization and Telemetry Dashboard** built with **Three.js, Chart.js, and JavaScript**.  
It simulates rocket flight data, renders a 3D trajectory path, and provides live telemetry stats such as velocity, altitude, acceleration, pressure, and more.  

---

## ✨ Features  
- 📈 **Real-time Telemetry Charts**  
  - Velocity, Altitude, Acceleration, Temperature, Pressure  
  - Smooth updates as the rocket moves along its path  
- 🌍 **3D Rocket Trajectory Visualization**  
  - Path plotted dynamically using Three.js  
  - Rocket model follows the path in real time  
- 🎮 **Interactive Camera Controls**  
  - Rotate, zoom, and pan with your mouse (OrbitControls)  
- 🚀 **Realistic Rocket Model**  
  - `.obj` 3D model included  
  - Automatically scaled and oriented upright  
- 🟢 **Launch & Landing Markers**  
  - Green sphere = Launch site  
  - Red sphere = Landing site  
- 🟦 **Ground Plane**  
  - Flat surface for visualizing the launch pad  
- ⏯️ **Playback Controls**  
  - Play, Pause, Rewind  
  - Time slider to scrub through the flight  

---

## 📸 Screenshots / Demo  


- **Full Dashboard**  
  ![Dashboard Overview](.public/assets/dashboard.png)  

- **3D Rocket Trajectory**  
  ![Trajectory View](.public/assets/trajectory.png)  

- **Live Telemetry Charts**  
  ![Charts](.public/assets/charts.png)  

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
│── assets/ # Images, icons (optional)


---

## 🚀 Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/kavana185/Rocket-Telemetry-Dashboard.git
cd Rocket-Telemetry-Dashboard

2️⃣ Run locally

You’ll need a local server (because Three.js & model loading won’t work from file://).

Using Python:
```
# Python 3
python -m http.server 8000
```
Then open 👉 http://localhost:8000
3️⃣ Explore the Dashboard
▶️ Play / ⏸️ Pause the rocket flight
🖱️ Rotate & zoom the 3D scene
📊 Watch telemetry data update in real time

##🛠️ Built With

Three.js
 – 3D rendering

Chart.js
 – Live charts

JavaScript, HTML, CSS
