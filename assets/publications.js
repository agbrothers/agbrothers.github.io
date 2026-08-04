export function initPublicationToggles() {
  document.querySelectorAll("[data-pubs-toggle]").forEach((btn) => {
    const list = document.getElementById(btn.getAttribute("aria-controls"));
    if (!list) return;

    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      list.hidden = expanded;
    });
  });
}
