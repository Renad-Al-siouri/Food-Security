
 window.onscroll = function() {scrollProgress()};

    function scrollProgress() {
      let winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
      document.getElementById("progressBar").style.width = scrolled + "%";
    }


    
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuIcon.classList.toggle("bx-menu");
  menuIcon.classList.toggle("bx-x");
});
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.add("bx-menu");
    menuIcon.classList.remove("bx-x");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  if (!splash) return; 

  setTimeout(() => {
    splash.classList.add("hidden");
    setTimeout(() => splash.remove(), 1000); 
  }, 2000);
});
