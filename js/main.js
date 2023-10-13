// Mobile Menu
const openMobileMenu = () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerButton.classList.toggle("hidden");
    document.querySelector("body").classList.toggle("overflow-y-hidden");
  };

  hamburgerButton.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", openMobileMenu);

/* Form Validation */
// input element
let emailInput = document.getElementById("email");
// go button
let goButton = document.getElementById("go");

const checkFunction = () => {
  goButton.addEventListener("click", () => {
    if (emailInput.value == "") {
    } else {
      emailInput.classList.add(
        "invalid:border-error",
        "invalid:text-error",
        "focus:invalid:border-error",
        "focus:invalid:ring-error",
        "peer",
      );
    }
  });
};

checkFunction();
