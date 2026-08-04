import { initHamburgerNav } from "./nav.js";
import { initCopyButtons } from "./copy.js";
import { initPublicationToggles } from "./publications.js";

document.addEventListener("DOMContentLoaded", () => {
  initHamburgerNav();
  initCopyButtons();
  initPublicationToggles();
});
