setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.classList.add("hide");
    }
  }, 2000); 
// Run when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  // Dropdown toggle (only for mobile)
  const dropdownLinks = document.querySelectorAll(".dropdown > a");
  dropdownLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const submenu = link.nextElementSibling;
        if (submenu) submenu.classList.toggle("show");
      }
    });
  });

  // Swiper for Home Slider
  new Swiper(".homeSwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
});

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header"); // <header> tag ko pakda
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});




//service section script

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("serviceSlider");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const scrollStep = 320; // ek card ki width approx
  let autoSlide;

  // Next Slide
  nextBtn.addEventListener("click", function () {
    slider.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  // Previous Slide
  prevBtn.addEventListener("click", function () {
    slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });

  // Auto Slide
  function startAutoSlide() {
    autoSlide = setInterval(function () {
      slider.scrollBy({ left: scrollStep, behavior: "smooth" });

      // Agar end pe aa jaye to wapas start pe
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  startAutoSlide();

  // Hover karte hi ruk jaye
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
});

var swiper = new Swiper(".servicesSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

//our service slider



  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 4,
  //   spaceBetween: 20,   // compact gap
  //   loop: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1
  //     },
  //     576: {
  //       slidesPerView: 2
  //     },
  //     992: {
  //       slidesPerView: 3
  //     },
  //     1200: {
  //       slidesPerView: 4
  //     }
  //   }
  // });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 40,  // gap control
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: false,  // 👈 बराबर alignment
    slidesOffsetBefore: 20, // 👈 left side padding
    slidesOffsetAfter: 20,  // 👈 right side padding
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
  

  //feture section script 
  var caseSwiper = new Swiper(".caseSwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".case-next",
      prevEl: ".case-prev",
    },
  });

  // FAQ Section Script //

  const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Testimonial //
var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//new our service //
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }
});


  // var swiper = new Swiper(".serviceSwiper", {
  //   loop: true,                     // infinite loop
  //   autoplay: {
  //     delay: 4000,                  // 4 sec per slide
  //     disableOnInteraction: false,  // user swipe kare to bhi autoplay na ruke
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });


  //festival offer section //


  var swiper = new Swiper(".offerSwiper", {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // home slider //

  var swiper = new Swiper(".homeSwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //drop down //

  document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector("li.dropdown > a");
  const parentLi = dropdown.parentElement;

  dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    parentLi.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!parentLi.contains(e.target)) {
      parentLi.classList.remove("open");
    }
  });
});

// Loader Hide on Page Load



  






  
const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");

const caseStudies = [
  { name: "Real Estate Industry", role: "Industry Focus" },
  { name: "Education Industry", role: "Industry Focus" },
  { name: "Healthcare Industry", role: "Industry Focus" },
  { name: "Automobile Industry", role: "Industry Focus" }
];

let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
  if(isAnimating) return;
  isAnimating = true;

  currentIndex = (newIndex + cards.length) % cards.length;

  cards.forEach((card,i) => {
    card.classList.remove("center","left-1","left-2","right-1","right-2","hidden");
    const offset = (i - currentIndex + cards.length) % cards.length;

    if(offset===0) card.classList.add("center");
    else if(offset===1) card.classList.add("right-1");
    else if(offset===2) card.classList.add("right-2");
    else if(offset===cards.length-1) card.classList.add("left-1");
    else if(offset===cards.length-2) card.classList.add("left-2");
    else card.classList.add("hidden");
  });

  dots.forEach((dot,i)=>dot.classList.toggle("active", i===currentIndex));

  memberName.style.opacity = "0";
  memberRole.style.opacity = "0";

  setTimeout(()=>{
    memberName.textContent = caseStudies[currentIndex].name;
    memberRole.textContent = caseStudies[currentIndex].role;
    memberName.style.opacity = "1";
    memberRole.style.opacity = "1";
  },300);

  setTimeout(()=>{ isAnimating=false; },800);
}

leftArrow.addEventListener("click",()=>updateCarousel(currentIndex-1));
rightArrow.addEventListener("click",()=>updateCarousel(currentIndex+1));

dots.forEach((dot,i)=>dot.addEventListener("click",()=>updateCarousel(i)));
cards.forEach((card,i)=>card.addEventListener("click",()=>updateCarousel(i)));

document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowLeft") updateCarousel(currentIndex-1);
  else if(e.key==="ArrowRight") updateCarousel(currentIndex+1);
});

updateCarousel(0);
