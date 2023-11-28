import state from "./state.js";
import * as display from "./display.js";
import * as el from "./elements.js";
import { btnPressAudio } from "./sounds.js";

export function togglePlay() {
  state.isRunning = el.app.classList.toggle("running");
  display.countdown();
  btnPressAudio.play();
}

export function stop() {
  state.isRunning = el.app.classList.remove("running");
  state.isRunning = false;
  display.update();
  btnPressAudio.play();
}

export function set() {
  if (state.isRunning) return;

  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function addTime() {
  let minutes = Number(el.minutes.textContent) + 5;
  if (minutes > 60) {
    minutes = 60;
  }
  el.minutes.textContent = String(minutes).padStart(2, "0");
  btnPressAudio.play();
}

export function subtractTime() {
  let minutes = Number(el.minutes.textContent) - 5;
  if (minutes < 0) {
    minutes = 0;
  }
  el.minutes.textContent = String(minutes).padStart(2, "0");
  btnPressAudio.play();
}
