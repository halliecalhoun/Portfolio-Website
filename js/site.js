(function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      window.setTimeout(function () {
        toggle.checked = false;
      }, 0);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") toggle.checked = false;
  });

  var buttons = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll(".card[data-kind]");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var kind = button.getAttribute("data-filter");
      buttons.forEach(function (other) {
        var active = other === button;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-pressed", active ? "true" : "false");
      });
      cards.forEach(function (card) {
        var show = kind === "all" || card.getAttribute("data-kind") === kind;
        card.hidden = !show;
      });
    });
  });
})();
