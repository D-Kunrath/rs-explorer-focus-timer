import state from "./state.js";
import * as display from "./display.js";
import * as events from "./events.js";

export function start(minutes, seconds) {
  state.minutes = minutes ?? state.minutes;
  state.seconds = seconds ?? state.seconds;

  display.update();

  events.registerControls();
  events.setMinutes();
  events.setSeconds();
}
