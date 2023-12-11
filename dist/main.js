const navBar = document.getElementById("navBar");
const burgerBtn = document.getElementById("burger-btn");
const burgerList = document.getElementById("burger-list");
burgerList.addEventListener("click", () => {
  burgerList.classList.add("hidden");
});
burgerBtn.addEventListener("change", () => {
  if (burgerBtn.checked === true) {
    burgerList.classList.remove("hidden");
  } else {
    burgerList.classList.add("hidden");
  }
});
window.addEventListener("scroll", () => {
  if (window.innerWidth >= 1024) {
    if (window.scrollY > 50) {
      navBar.classList.remove("lg:py-8");
      navBar.classList.remove("lg:bg-transparent");
      navBar.classList.add("lg:bg-black");
      navBar.classList.add("lg:py-4");
    } else {
      navBar.classList.remove("lg:bg-black");
      navBar.classList.add("lg:py-8");
      navBar.classList.remove("lg:py-4");
      navBar.classList.add("lg:bg-transparent");
    }
  }
});
window.addEventListener("load", () => {
  if (window.innerWidth >= 1024) {
    if (window.scrollY > 50) {
      navBar.classList.remove("lg:py-8");
      navBar.classList.remove("lg:bg-transparent");
      navBar.classList.add("lg:bg-black");
      navBar.classList.add("lg:py-4");
    }
  }
});
// <=============================fade in animate=============================>
const fadeAnimateObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100");
    }
  });
});
const animatedElements = document.querySelectorAll(".animation");
animatedElements.forEach((el) => fadeAnimateObserver.observe(el));
// <=============================fade down animate=============================>
const fadeDownAnimateObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100");
      entry.target.classList.add("translate-y-0");
    }
  });
});
const animationDownElements = document.querySelectorAll(".animation-down");
animationDownElements.forEach((el) => fadeDownAnimateObserver.observe(el));
