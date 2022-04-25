const nav = document.querySelector(".navbar");
const mobileNav = document.querySelector(".mobile-nav");
const barsIcon = document.querySelector(".bars-icon");

let open = false;

barsIcon.addEventListener("click", () => {
  if (!open) {
    mobileNav.style.transform = "translateY(0)";
    open = true;
  } else {
    mobileNav.style.transform = "translateY(-200px)";
    open = false;
  }
});
