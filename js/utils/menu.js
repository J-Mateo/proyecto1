const menu = () => {
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu li a");

  if (!hamburger || !navMenu) return;

  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  };

  hamburger.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
};

export default menu;