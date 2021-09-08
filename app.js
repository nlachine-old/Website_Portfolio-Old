const navLinks = document.querySelectorAll(".nav__link > a");
const navContainer = document.querySelector("nav");
const navToggle = document.querySelector("#nav-toggle");
const mainContainer = document.querySelector("main");

//  Close Mobile Nav Bar
// On click out
mainContainer.addEventListener("click", () => {
  navToggle.checked = false;
});

// On link click
for (let link of navLinks) {
  link.addEventListener("click", () => {
    navToggle.checked = false;
    console.log("clicked");
  });
}
