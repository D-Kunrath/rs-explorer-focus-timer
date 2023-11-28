import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import * as display from "./display.js";
import state from "./state.js";

export function registerControls() {
  controls.addEventListener("click", (e) => {
    const action = e.target.dataset.action;

    if (typeof actions[action] !== "function") return;

    actions[action]();
  });
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  el.minutes.addEventListener("keypress", (e) => {
    if (!/\d/.test(e.key)) e.preventDefault();
    let value = e.currentTarget.textContent;
    if (Number(value + e.key) > 60) {
      e.preventDefault();
      e.currentTarget.textContent = 60;
    }
  });

  el.minutes.addEventListener("blur", (e) => {
    let minutes = e.currentTarget.textContent;
    state.minutes = minutes;
    display.update();
    el.minutes.removeAttribute("contenteditable");
    el.seconds.setAttribute("contenteditable", true);
    el.seconds.focus();
  });
}

export function setSeconds() {
  el.seconds.addEventListener("focus", () => {
    el.seconds.textContent = "";
  });

  el.seconds.addEventListener("keypress", (e) => {
    if (!/\d/.test(e.key)) e.preventDefault();
    let value = e.currentTarget.textContent;
    if (Number(value + e.key) > 59) {
      e.preventDefault();
      e.currentTarget.textContent = 59;
    }
  });

  el.seconds.addEventListener("blur", (e) => {
    let seconds = e.currentTarget.textContent;
    state.seconds = seconds;
  });
}
