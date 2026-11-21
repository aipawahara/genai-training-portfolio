(function () {
  'use strict';

  // ---- Header: add shadow / border once the page is scrolled ----
  var header = document.getElementById('siteHeader');
  function updateHeaderState() {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  // ---- Hamburger menu ----
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');

  function closeMenu() {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    var isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Close the mobile menu after choosing a link
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu if the viewport grows back to desktop size
  window.addEventListener('resize', function () {
    if (window.innerWidth > 767) {
      closeMenu();
    }
  });

  // ---- Demo contact form: prevent actual submission ----
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('デモ用のフォームです。実際の送信は行われません。');
    });
  }

  // ---- Placeholder privacy policy link ----
  var privacyLink = document.getElementById('privacyLink');
  if (privacyLink) {
    privacyLink.addEventListener('click', function (e) {
      e.preventDefault();
    });
  }
})();
