const mobileMenu = document.querySelector(".mobile__menu");
const mobileMenuOptions = document.querySelector(".mobile__menu__options");

mobileMenu.addEventListener("click", () => {
    mobileMenuOptions.classList.toggle("menu__close");
    mobileMenuOptions.classList.toggle("menu__open");
});
