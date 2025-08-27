import * as THREE from "three";
import { Chart } from "chart.js/auto";

import { initTrajectory } from "./trajectory.js";
import { initCharts } from "./dashboard.js";   // ✅ correct import
import { initPlayback } from "./playback.js";

let telemetryData = [];
let playInterval = null;

function importData() {
  fetch("/data/flight1.json")   // ✅ absolute path for Vite public folder
    .then(res => res.json())
    .then(data => {
      telemetryData = data;

      // Initialize all modules
      initTrajectory(telemetryData);
      initCharts(telemetryData);
      initPlayback(telemetryData);
    })
    .catch(err => console.error("Error loading flight data:", err));
}

importData();
