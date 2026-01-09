export function initHamburgerNav() {
  const btn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isHidden = menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!isHidden));
  });

  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}
