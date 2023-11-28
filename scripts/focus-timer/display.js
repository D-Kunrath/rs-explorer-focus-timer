import state from "./state.js";
import * as el from "./elements.js";
import * as actions from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function update(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}

export function countdown() {
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    actions.stop();
    kitchenTimer.play();
    return;
  }

  update(minutes, seconds);
  state.countdownId = setTimeout(() => countdown(), 1000);
}
