/* ==========================================================================
   Main JS — Getränke Haußmann
   Mobile Menu, Sticky Header, Smooth Scroll
   ========================================================================== */

(function () {
  "use strict";

  const header = document.getElementById("header");
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");

  // ---- Mobile Menu Toggle ----
  navToggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("nav--open");
    navToggle.classList.toggle("nav-toggle--open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
  });

  // Close menu when a nav link is clicked
  nav.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav__link")) {
      nav.classList.remove("nav--open");
      navToggle.classList.remove("nav-toggle--open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Menü öffnen");
    }
  });

  // ---- Sticky Header Shadow on Scroll ----
  function updateHeader() {
    if (window.scrollY > 10) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header.offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
})();
