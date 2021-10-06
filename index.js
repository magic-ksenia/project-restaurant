/*const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);
const menuToggle = document.getElementById("navbarNavAltMarkup");
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

$("body").on("click", "[data-trigger-button]", function () {
  if (window.matchMedia("(max-width: 991px)").matches) {
    var $this = $(this),
      cNavButton = $this.data("trigger-button");
    $(cNavButton).trigger("click");
  }
});*/

$("html, body").animate(
  {
    scrollTop: $("#about").offset().top - $("header").height(),
  },
  1000
);
