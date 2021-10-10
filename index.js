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

// add function to listen anchor links in navbar addEventListener ("click", add class active to current anchor link and remove from class actove from others)

document.querySelector("html, body").animate(
  {
    scrollTop: document.querySelector("section").offsetTop - 68,
  },
  100
);
