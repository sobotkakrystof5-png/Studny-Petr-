(function () {
  "use strict";

  /* ---------- mobile drawer ---------- */
  var hamburger = document.getElementById("hamburger");
  var drawer = document.getElementById("mobile-drawer");
  var backdrop = document.getElementById("drawerBackdrop");
  var drawerClose = document.getElementById("drawerClose");

  function openDrawer() {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    drawer.removeAttribute("inert");
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    drawer.setAttribute("inert", "");
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

  /* ---------- gallery filter ---------- */
  var pills = document.querySelectorAll(".pill");
  var galleryItems = document.querySelectorAll(".media-grid .img");

  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      pills.forEach(function (p) { p.classList.remove("active"); });
      pill.classList.add("active");
      var filter = pill.getAttribute("data-filter");
      galleryItems.forEach(function (item) {
        var show = filter === "all" || item.getAttribute("data-category") === filter;
        item.hidden = !show;
      });
    });
  });

  /* ---------- contact form: honeypot + inline validation + mailto handoff ---------- */
  var form = document.getElementById("poptavkaForm");
  var status = document.getElementById("formStatus");

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
      showStatus("Zkontrolujte prosím vyznačená pole formuláře.", true);
      return;
    }

    var jmeno = document.getElementById("jmeno").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefon = document.getElementById("telefon").value.trim();
    var zprava = document.getElementById("zprava").value.trim();

    var subject = "Poptávka ze webu — " + jmeno;
    var body = "Jméno: " + jmeno + "\nE-mail: " + email +
      (telefon ? "\nTelefon: " + telefon : "") +
      "\n\nZpráva:\n" + zprava;

    var mailto = "mailto:petran111@seznam.cz" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
    showStatus("Otevřel se e-mailový klient s předvyplněnou zprávou — dokončete odeslání tam.", false);
    form.reset();
  });

  function showStatus(message, isError) {
    status.textContent = message;
    status.hidden = false;
    status.classList.toggle("error", isError);
    status.classList.toggle("success", !isError);
  }
})();
