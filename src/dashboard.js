
import { Chart } from "chart.js/auto";

export function initCharts(data) {
  // Update live stats
  function updateStats(entry) {
    document.getElementById("velocity").textContent = entry.velocity + " m/s";
    document.getElementById("altitude").textContent = entry.altitude + " m";
    document.getElementById("acceleration").textContent = entry.acceleration + " m/s²";
    document.getElementById("temperature").textContent = entry.temperature + " °C";
    document.getElementById("pressure").textContent = entry.pressure + " Pa";
    document.getElementById("gps").textContent = entry.gps.join(", ");
  }

  // Charts
  new Chart(document.getElementById("altitudeChart"), {
    type: "line",
    data: {
      labels: data.map(d => d.time),
      datasets: [{ label: "Altitude", data: data.map(d => d.altitude), borderColor: "blue" }]
    }
  });

  new Chart(document.getElementById("velocityChart"), {
    type: "line",
    data: {
      labels: data.map(d => d.time),
      datasets: [{ label: "Velocity", data: data.map(d => d.velocity), borderColor: "green" }]
    }
  });

  new Chart(document.getElementById("accelerationChart"), {
    type: "line",
    data: {
      labels: data.map(d => d.time),
      datasets: [{ label: "Acceleration", data: data.map(d => d.acceleration), borderColor: "red" }]
    }
  });

  // Update stats initially
  updateStats(data[0]);
}
