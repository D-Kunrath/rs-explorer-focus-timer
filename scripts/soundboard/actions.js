import { soundboard } from "./elements.js";
import * as sounds from "./sounds.js";

export function turnOffAudio() {
  soundboard.querySelectorAll(".sound-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  sounds.forestAudio.pause();
  sounds.rainAudio.pause();
  sounds.coffeeShopAudio.pause();
  sounds.fireplaceAudio.pause();
}

export function playForestAudio() {
  soundboard.querySelector(".ph-tree").classList.add("active");
  sounds.forestAudio.play();
}

export function playRainAudio() {
  soundboard.querySelector(".ph-cloud-rain").classList.add("active");
  sounds.rainAudio.play();
}

export function playCoffeeShopAudio() {
  soundboard.querySelector(".ph-storefront").classList.add("active");
  sounds.coffeeShopAudio.play();
}

export function playFireplaceAudio() {
  soundboard.querySelector(".ph-campfire").classList.add("active");
  sounds.fireplaceAudio.play();
}
