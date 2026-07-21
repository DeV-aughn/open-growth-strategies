/* Open Growth Strategies — direction 05 · interactions */
(function () {
  "use strict";
  var root = document.documentElement;

  /* QA/preview aid: ?static renders every reveal instantly (no scroll needed). */
  var STATIC = /[?&]static\b/.test(location.search);
  if (STATIC) root.classList.add("static");

  /* ---- Theme toggle (initial theme is set pre-paint by the inline <head>
     script — the single source of truth. Here we only handle the button.) --- */
  var THEME_KEY = "ogs-theme";
  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", next === "dark" ? "#0a0a0a" : "#fafafa");
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  /* ---- Mobile nav overlay ------------------------------------------------ */
  var burger = document.getElementById("navBurger");
  var overlay = document.getElementById("navOverlay");
  if (burger && overlay) {
    var toggleNav = function (open) {
      var isOpen = open != null ? open : overlay.hasAttribute("hidden");
      if (isOpen) { overlay.removeAttribute("hidden"); }
      else { overlay.setAttribute("hidden", ""); }
      burger.setAttribute("aria-expanded", String(isOpen));
    };
    burger.addEventListener("click", function () { toggleNav(); });
    overlay.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { toggleNav(false); });
    });
  }

  /* ---- Scroll reveal ----------------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if (STATIC) {
    reveals.forEach(function (el) { el.classList.add("is-in"); maybeCount(el); });
  } else if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
          maybeCount(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); maybeCount(el); });
  }

  /* Failsafe: never leave in-viewport content invisible if IO is slow/absent.
     Runs on load — reveals anything already within the viewport height.
     (In a normal window only above-the-fold reveals here; the rest animate on
     scroll. In a tall screenshot window, everything reveals — capture stays clean.) */
  window.addEventListener("load", function () {
    requestAnimationFrame(function () {
      reveals.forEach(function (el) {
        if (el.classList.contains("is-in")) return;
        var r = el.getBoundingClientRect();
        if (r.top < (window.innerHeight || 800) && r.bottom > 0) {
          el.classList.add("is-in");
          maybeCount(el);
        }
      });
    });
  });

  /* ---- Stat / proof count-up -------------------------------------------- */
  function animateCount(el) {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    var target = parseFloat(el.dataset.count);
    var decimals = parseInt(el.dataset.decimals || "0", 10);
    var prefix = el.dataset.prefix || "";
    var suffix = el.dataset.suffix != null ? el.dataset.suffix : "";
    var dur = 1200, start = null;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.textContent = prefix + target.toFixed(decimals) + suffix; return; }
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = prefix + val.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(frame);
  }
  function maybeCount(container) {
    var nums = container.matches("[data-count]") ? [container] : container.querySelectorAll("[data-count]");
    nums.forEach(animateCount);
  }

  /* ---- Capability tabs --------------------------------------------------- */
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
    });
  });

  /* ---- Email capture (demo) --------------------------------------------- */
  document.querySelectorAll(".cta__form").forEach(function (form) {
    form.addEventListener("submit", function () {
      var input = form.querySelector("input");
      var btn = form.querySelector("button");
      if (input && input.value && btn) {
        btn.textContent = "Thanks — I'll be in touch ✓";
        input.value = "";
        setTimeout(function () { btn.textContent = "Check availability"; }, 2600);
      }
    });
  });
})();
