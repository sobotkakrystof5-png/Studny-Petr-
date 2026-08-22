(function () {
  "use strict";

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

  /* ---------- contact form: honeypot + inline validation + API submit ---------- */
  var form = document.getElementById("poptavkaForm");
  var status = document.getElementById("formStatus");
  var submitBtn = document.getElementById("submitBtn");
  var submitBtnDefaultLabel = submitBtn.textContent;

  var fieldConfig = [
    { id: "jmeno", hintValid: "Zadejte prosím jméno alespoň o 2 znacích.", hintError: "Jméno musí mít alespoň 2 znaky." },
    { id: "email", hintValid: "Zadejte prosím platnou e-mailovou adresu.", hintError: "Zadejte platnou e-mailovou adresu." },
    { id: "zprava", hintValid: "Popište prosím poptávku (alespoň 10 znaků).", hintError: "Zpráva musí mít alespoň 10 znaků." }
  ];

  fieldConfig.forEach(function (cfg) {
    var input = document.getElementById(cfg.id);
    input.addEventListener("blur", function () {
      input.setAttribute("data-touched", "true");
      updateHint(cfg, input);
    });
    input.addEventListener("input", function () {
      if (input.getAttribute("data-touched") === "true") {
        updateHint(cfg, input);
      }
    });
  });

  function updateHint(cfg, input) {
    var hint = input.parentElement.querySelector(".hint");
    if (!hint) return;
    if (input.validity.valid) {
      hint.textContent = cfg.hintValid;
      hint.classList.remove("error");
    } else {
      hint.textContent = cfg.hintError;
      hint.classList.add("error");
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var honeypot = form.querySelector(".honeypot");
    if (honeypot.value.trim() !== "") {
      return;
    }

    fieldConfig.forEach(function (cfg) {
      var input = document.getElementById(cfg.id);
      input.setAttribute("data-touched", "true");
      updateHint(cfg, input);
    });

    if (!form.checkValidity()) {
      var firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      showStatus("Zkontrolujte prosím vyznačená pole formuláře.", "error");
      return;
    }

    var jmeno = document.getElementById("jmeno").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefon = document.getElementById("telefon").value.trim();
    var zprava = document.getElementById("zprava").value.trim();
    var souhlas = document.getElementById("souhlas").checked;

    submitBtn.disabled = true;
    submitBtn.textContent = "Odesílám…";
    showStatus("Odesílám poptávku…", "loading");

    fetch("/api/kontakt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jmeno: jmeno,
        email: email,
        telefon: telefon,
        zprava: zprava,
        souhlas: souhlas,
        predmet_web: honeypot.value
      })
    })
      .then(function (res) {
        if (!res.ok) throw new Error("send_failed");
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtnDefaultLabel;
        form.reset();
        fieldConfig.forEach(function (cfg) {
          document.getElementById(cfg.id).removeAttribute("data-touched");
        });
        showStatus("Děkujeme, poptávka byla odeslána. Ozveme se vám zpět co nejdřív.", "success");
      })
      .catch(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtnDefaultLabel;
        showStatus("Poptávku se nepodařilo odeslat. Zkuste to prosím znovu, nebo nám rovnou zavolejte na +420 605 753 751.", "error");
      });
  });

  function showStatus(message, kind) {
    status.textContent = message;
    status.hidden = false;
    status.classList.toggle("loading", kind === "loading");
    status.classList.toggle("error", kind === "error");
    status.classList.toggle("success", kind === "success");
  }

  /* ---------- galerie: lightbox zvětšení ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxContent = document.getElementById("lightboxContent");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
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
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxContent.innerHTML = "";
    document.body.style.overflow = "";
    if (lastGalleryTrigger) lastGalleryTrigger.focus();
  }

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      openLightbox(item);
    });
  });

  lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
    el.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
    if (e.key === "Tab" && !lightbox.hidden) {
      e.preventDefault();
      lightboxClose.focus();
    }
  });

  /* ---------- proces: scroll-triggered reveal (left to right) ---------- */
  var processSteps = document.querySelectorAll(".process-step");
  if (processSteps.length && "IntersectionObserver" in window) {
    var processObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            processObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    processSteps.forEach(function (step) {
      processObserver.observe(step);
    });
  } else {
    processSteps.forEach(function (step) {
      step.classList.add("is-visible");
    });
  }
})();
