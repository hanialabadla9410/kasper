let bars = document.querySelector(".bars");
let xmark = document.querySelector(".xmark");
let nav = document.querySelector("nav ul");
let links = document.querySelectorAll("nav ul li");
let navA = document.querySelectorAll("nav ul li a");
let portfolioLinks = document.querySelectorAll(".portfolio .shuffle li");
const mediaQuery = window.matchMedia("(max-width: 767px)");
const mediaQueryLarge = window.matchMedia("(min-width: 767px)");

if (mediaQuery.matches) {
  bars.addEventListener("click", () => {
    xmark.style.display = "flex";
    bars.style.display = "none";
    nav.style.display = "flex";
  });

  xmark.addEventListener("click", () => {
    bars.style.display = "flex";
    xmark.style.display = "none";
    nav.style.display = "none";
  });

  links.forEach((e) => {
    e.addEventListener("click", () => {
      nav.style.display = "none";
      bars.style.display = "flex";
      xmark.style.display = "none";
    });
  });
}
mediaQuery.addEventListener("change", (e) => {
  if (!e.matches) {
    bars.style.display = "none";
    xmark.style.display = "none";
    nav.style.display = "flex";
  }
});

/* ----------------------- */
navA.forEach(function (e) {
  e.addEventListener("click", function () {
    navA.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});

/* ----------------------------- */

portfolioLinks.forEach((e) => {
  e.addEventListener("click", () => {
    portfolioLinks.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});

/* ----------------------------------- */

/* ----------------------------------- */

let formEvent = document.querySelector(".subscribe form");
formEvent.onsubmit = function (event) {
  let emailInput = document.querySelector(
    '.subscribe form input[type="email"]'
  );
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let emailValidation = emailRegex.test(emailInput.value);
  if (!emailValidation) {
    event.preventDefault();
    alert("Invalid email address!");
    return false;
  }
  return true;
};

/* ----------------------------------- */

let formDiscount = document.querySelector(".contact form");

formDiscount.onsubmit = function (event) {
  let nameInput = document.querySelector(
    '.contact form input[placeholder="Your Name"]'
  );
  let emailInput = document.querySelector(
    '.contact form input[placeholder="Your Email"]'
  );

  let nameRegex = /^[a-zA-Z\s]+$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!nameRegex.test(nameInput.value)) {
    alert("Please enter a valid name (letters and spaces only).");
    event.preventDefault();
    return false;
  }

  if (!emailRegex.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return false;
  }

  return true;
};

/* -------------------------------------- */

/* ------------------------------ */

// Scroll Up
let scrollUp = document.querySelector("span.up");

window.onscroll = function () {
  window.scrollY >= 500
    ? scrollUp.classList.add("active")
    : scrollUp.classList.remove("active");
};

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

/* ------------------------------ */

let date = new Date();
document.querySelector(".footer .year").textContent = date.getFullYear();
