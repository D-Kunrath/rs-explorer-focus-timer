import { soundboard } from "./elements.js";
import * as actions from "./actions.js";

soundboard.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  if (typeof actions[action] !== "function") return;

  const isActive = e.target.classList.contains("active");
  actions.turnOffAudio();
  if (isActive) {
    return;
  }

  actions[action]();
});
