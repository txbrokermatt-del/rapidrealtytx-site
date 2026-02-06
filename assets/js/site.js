// Simple mobile menu toggle — does NOT block links
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-menu]");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
