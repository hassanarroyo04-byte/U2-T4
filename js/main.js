const pageInput = document.getElementById("page-count");
const estimatedCost = document.getElementById("estimated-cost");
const pagePrice = 800;
const maximumPages = 100;

function updateEstimate() {
  const pages = Number.parseInt(pageInput.value, 10);
  const validPages = Number.isFinite(pages)
    ? Math.min(maximumPages, Math.max(1, pages))
    : 1;

  pageInput.value = validPages;
  estimatedCost.textContent = `$${(validPages * pagePrice).toLocaleString("en-US")}`;
}

pageInput.addEventListener("input", updateEstimate);
pageInput.addEventListener("change", updateEstimate);

document.querySelectorAll(".quantity-button").forEach((button) => {
  button.addEventListener("click", () => {
    pageInput.value = Number(pageInput.value) + Number(button.dataset.step);
    updateEstimate();
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  navLinks.classList.toggle("is-open", !isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    navLinks.classList.remove("is-open");
  });
});

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.from(".hero-copy > *", {
      duration: 0.75,
      y: 24,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.15,
    });

    gsap.from(".hero-visual", {
      duration: 1,
      x: 35,
      opacity: 0,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.from(".service-card", {
      scrollTrigger: { trigger: ".services-grid", start: "top 82%" },
      duration: 0.65,
      y: 28,
      opacity: 0,
      stagger: 0.12,
      ease: "power2.out",
    });

    gsap.utils.toArray("[data-reveal]").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: { trigger: element, start: "top 86%" },
        duration: 0.7,
        y: 24,
        opacity: 0,
        ease: "power2.out",
      });
    });

    gsap.from(".project-card", {
      scrollTrigger: { trigger: ".project-grid", start: "top 82%" },
      duration: 0.7,
      y: 30,
      opacity: 0,
      stagger: 0.14,
      ease: "power2.out",
    });
  }
}
