import { updateRocket } from "./trajectory.js";  // ✅ import at the top

export function initPlayback(data) {
  let index = 0;
  let playing = false;
  let playInterval;

  const playPauseBtn = document.getElementById("playPauseBtn");
  const rewindBtn = document.getElementById("rewindBtn");
  const timeSlider = document.getElementById("timeSlider");

  timeSlider.max = data.length - 1;

  function updateFrame(i) {
  if (data[i]) {
    document.getElementById("velocity").textContent = data[i].velocity + " m/s";
    document.getElementById("altitude").textContent = data[i].altitude + " m";
    document.getElementById("acceleration").textContent = data[i].acceleration + " m/s²";
    document.getElementById("temperature").textContent = data[i].temperature + " °C";
    document.getElementById("pressure").textContent = data[i].pressure + " Pa";
    document.getElementById("gps").textContent = data[i].gps.join(", ");
    timeSlider.value = i;

    // 🚀 Move rocket + grow line
    updateRocket(data[i], i, data);
  }
}


  playPauseBtn.addEventListener("click", () => {
    playing = !playing;
    playPauseBtn.textContent = playing ? "⏸️" : "▶️";

    if (playing) {
      playInterval = setInterval(() => {
        if (index < data.length) {
          updateFrame(index++);
        } else {
          clearInterval(playInterval);
          playing = false;
          playPauseBtn.textContent = "▶️";
        }
      }, 200);
    } else {
      clearInterval(playInterval);
    }
  });

  rewindBtn.addEventListener("click", () => {
    index = 0;
    updateFrame(index);
  });

  timeSlider.addEventListener("input", e => {
    index = parseInt(e.target.value);
    updateFrame(index);
  });
}
