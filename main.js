/* Shared behaviour: theme toggle (persisted), mobile menu, scroll reveal */
(function () {
  // ---- Theme: apply ASAP to avoid flash (also inlined in <head>) ----
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("vb-theme", t); } catch (e) {}
  }
  window.__toggleTheme = function () {
    var cur = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(cur === "dark" ? "light" : "dark");
  };

  document.addEventListener("DOMContentLoaded", function () {
    // theme button
    var tbtn = document.getElementById("theme-toggle");
    if (tbtn) tbtn.addEventListener("click", window.__toggleTheme);

    // mobile menu
    var mt = document.getElementById("menu-toggle");
    var links = document.getElementById("nav-links");
    if (mt && links) mt.addEventListener("click", function () { links.classList.toggle("open"); });

    // scroll reveal
    var els = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add("in"); });
    }
  });
})();
