const navbarNavLink = document.querySelectorAll(".navbar-nav>a");
const navbarCollapse = document.querySelector(".navbar-collapse");
navbarNavLink.forEach((I) => {
  I.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    } else {
      navbarCollapse.classList.add("show");
    }
  });
});

document.querySelector("html, body").animate(
  {
    scrollTop: document.querySelector("section").offsetTop - 68,
  },
  1000
);
