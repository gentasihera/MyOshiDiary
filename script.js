// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

  // Hamburger & Dropdown setup (dari sebelumnya)
//   const hamburger = document.getElementById('hamburger');
//   const navMenu = document.getElementById('nav-menu');
//   const dropdown = document.querySelector('.dropdown');

//   hamburger.addEventListener('click', () => {
//     navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
//   });

//  dropbtn.addEventListener("click", function(e) {

//   if (window.innerWidth <= 768) {
//     e.preventDefault();
//     dropdown.classList.toggle("active");
//   }
// });

  // Set active link
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });



  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Ganti setiap 4 detik
  }


  const scrollContainer = document.getElementById("scroll-container");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });

