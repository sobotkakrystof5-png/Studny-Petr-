(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- header: shadow on scroll ---------- */
  var siteHeader = document.querySelector("header.site");
  var headerScrollTicking = false;
  function updateHeaderShadow() {
    if (siteHeader) {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    headerScrollTicking = false;
  }
  window.addEventListener(
    "scroll",
    function () {
      if (!headerScrollTicking) {
        window.requestAnimationFrame(updateHeaderShadow);
        headerScrollTicking = true;
      }
    },
    { passive: true }
  );
  updateHeaderShadow();

  /* ---------- mobile drawer ---------- */
  var hamburger = document.getElementById("hamburger");
  var drawer = document.getElementById("mobile-drawer");
  var backdrop = document.getElementById("drawerBackdrop");
  var drawerClose = document.getElementById("drawerClose");
  var stickyCall = document.getElementById("stickyCall");

  function openDrawer() {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    drawer.removeAttribute("inert");
    if (stickyCall) stickyCall.setAttribute("inert", "");
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    drawer.setAttribute("inert", "");
    if (stickyCall) stickyCall.removeAttribute("inert");
  }

  hamburger.addEventListener("click", function () {
    if (drawer.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });
  drawerClose.addEventListener("click", function () {
    closeDrawer();
    hamburger.focus();
  });
  backdrop.addEventListener("click", function () {
    closeDrawer();
    hamburger.focus();
  });
  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
      hamburger.focus();
    }
  });

  /* ---------- galerie: lightbox zvětšení ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxContent = document.getElementById("lightboxContent");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var galleryItems = document.querySelectorAll(".gallery-item");
  var lastGalleryTrigger = null;

  function openLightbox(trigger) {
    lastGalleryTrigger = trigger;
    var img = trigger.querySelector("img");
    var caption = trigger.getAttribute("data-caption") || "";

    if (img) {
      lightboxContent.innerHTML = "";
      var bigImg = document.createElement("img");
      bigImg.src = img.currentSrc || img.src;
      bigImg.alt = img.alt || caption;
      lightboxContent.appendChild(bigImg);
    } else {
      lightboxContent.innerHTML = trigger.innerHTML;
      var placeholder = lightboxContent.firstElementChild;
      if (placeholder) placeholder.classList.remove("gallery-item");
    }
    lightboxCaption.textContent = caption;

    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(function () {
      lightbox.classList.add("is-open");
    });
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastGalleryTrigger) lastGalleryTrigger.focus();
    window.setTimeout(
      function () {
        lightbox.hidden = true;
        lightboxContent.innerHTML = "";
      },
      reduceMotion ? 0 : 250
    );
  }

  function moveLightbox(direction) {
    var currentIndex = Array.prototype.indexOf.call(galleryItems, lastGalleryTrigger);
    var nextIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    openLightbox(galleryItems[nextIndex]);
  }

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      openLightbox(item);
    });
  });

  lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
    el.addEventListener("click", closeLightbox);
  });
  lightboxPrev.addEventListener("click", function () { moveLightbox(-1); });
  lightboxNext.addEventListener("click", function () { moveLightbox(1); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
    if (e.key === "ArrowLeft" && !lightbox.hidden) moveLightbox(-1);
    if (e.key === "ArrowRight" && !lightbox.hidden) moveLightbox(1);
    if (e.key === "Tab" && !lightbox.hidden) {
      e.preventDefault();
      if (document.activeElement === lightboxPrev) {
        lightboxNext.focus();
      } else if (document.activeElement === lightboxNext) {
        lightboxClose.focus();
      } else {
        lightboxPrev.focus();
      }
    }
  });

  /* ---------- scroll-triggered reveal: proces + kartové mřížky ---------- */
  function setupReveal(selector, threshold) {
    var items = document.querySelectorAll(selector);
    if (!items.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold || 0.2 }
    );
    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  setupReveal(".process-grid > .process-step", 0.3);
  setupReveal(".value-grid > div");
  setupReveal(".text-card-grid > .text-card");
  setupReveal(".media-grid > .gallery-item", 0.15);
  setupReveal(".reference-grid > .ref-card", 0.15);

  /* ---------- FAQ: plynulé rozbalení/sbalení ---------- */
  document.querySelectorAll(".faq-item").forEach(function (details) {
    var summary = details.querySelector("summary");
    var content = details.querySelector("p");
    if (!summary || !content || reduceMotion) return;

    function expand() {
      details.open = true;
      var target = content.scrollHeight;
      content.style.overflow = "hidden";
      content.style.maxHeight = "0px";
      content.style.opacity = "0";
      content.getBoundingClientRect();
      content.style.transition = "max-height .25s ease, opacity .2s ease";
      content.style.maxHeight = target + "px";
      content.style.opacity = "1";
      content.addEventListener("transitionend", function handler() {
        content.style.maxHeight = "none";
        content.style.overflow = "";
        content.removeEventListener("transitionend", handler);
      });
    }

    function collapse() {
      var current = content.scrollHeight;
      content.style.overflow = "hidden";
      content.style.maxHeight = current + "px";
      content.style.opacity = "1";
      content.getBoundingClientRect();
      content.style.transition = "max-height .2s ease, opacity .15s ease";
      content.style.maxHeight = "0px";
      content.style.opacity = "0";
      content.addEventListener("transitionend", function handler() {
        details.open = false;
        content.style.maxHeight = "";
        content.style.overflow = "";
        content.style.opacity = "";
        content.style.transition = "";
        content.removeEventListener("transitionend", handler);
      });
    }

    summary.addEventListener("click", function (e) {
      e.preventDefault();
      if (details.open) {
        collapse();
      } else {
        expand();
      }
    });
  });
})();
