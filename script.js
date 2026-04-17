const yearNode = document.querySelector("#year");
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const revealNodes = Array.from(document.querySelectorAll("[data-reveal], .page-section, .hero-home"));

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

revealNodes.forEach((node) => {
  node.setAttribute("data-reveal", "");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open", !expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}
