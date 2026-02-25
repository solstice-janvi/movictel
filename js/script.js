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
const cards2 = document.querySelectorAll(".case-item");

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

document.addEventListener("DOMContentLoaded", function () {

  const cards2 = document.querySelectorAll(".case-item");
  const leftBtn = document.querySelector(".nav-arrow.left");
  const rightBtn = document.querySelector(".nav-arrow.right");
  const memberName = document.querySelector(".member-name");

  let currentIndex = 0;
  const totalCards = cards2.length;

  function updateCarousel() {

    cards2.forEach((card, index) => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = "0";
      card.style.transform = "scale(0.8)";
      card.style.zIndex = "0";

      if (index === currentIndex) {
        card.style.opacity = "1";
        card.style.transform = "translateX(0) scale(1)";
        card.style.zIndex = "5";
      } 
      else if (index === (currentIndex - 1 + totalCards) % totalCards) {
        card.style.opacity = "0.6";
        card.style.transform = "translateX(-260px) scale(0.85)";
        card.style.zIndex = "4";
      } 
      else if (index === (currentIndex + 1) % totalCards) {
        card.style.opacity = "0.6";
        card.style.transform = "translateX(260px) scale(0.85)";
        card.style.zIndex = "4";
      }
    });

    // Update bottom title
    const activeTitle = cards2[currentIndex].querySelector("h3").innerText;
    memberName.textContent = activeTitle + " Industry";
  }

  rightBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
  });

  leftBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
  });

  // Initial load
  updateCarousel();

});

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


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const dots = document.querySelectorAll('.dot');

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
        dots[i].classList.add('active');
      }
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  // Event listeners
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      showSlide(current);
    });
  });

  // Auto slide every 5s
  setInterval(nextSlide, 5000);
});
function openPopup() {
  document.getElementById('casePopup').style.display = 'flex';
}
function closePopup() {
  document.getElementById('casePopup').style.display = 'none';
}

let lastScrollTop = 0;
const header = document.getElementById("main-header");
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Navbar behavior
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.classList.add("nav-hidden");
  } else {
    header.classList.remove("nav-hidden");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling

  // Back to top button visibility
  if (scrollTop > 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// 2. Scroll smoothly to top when back arrow is clicked
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 3. Footer Toggle logic
// const footerToggleBtn = document.getElementById('footerToggleBtn');
// const collapsibleCols = document.querySelectorAll('.footer-collapsible');

// if(footerToggleBtn) {
//   footerToggleBtn.addEventListener('click', () => {
//     let isExpanded = false;
//     collapsibleCols.forEach(col => {
//       col.classList.toggle('expanded');
//       if (col.classList.contains('expanded')) {
//         isExpanded = true;
//       }
//     });
    
//     // Toggle button text and icon
//     if (isExpanded) {
//       footerToggleBtn.innerHTML = 'Show Less ';
//     } else {
//       footerToggleBtn.innerHTML = 'Show More';
//     }
//   });
// }

const servicesData = {
    "social-media-marketing": {
      title: "Social Media Marketing",
      description: "We manage and grow your brand presence across social platforms with content planning, engagement strategies, and performance tracking.",
      features: [
        { title: "Engaging Content", desc: "We craft visually appealing and highly engaging content tailored to your target audience." },
        { title: "Community Management", desc: "We actively monitor, reply, and engage with your followers to build brand loyalty." },
        { title: "Analytics & Reporting", desc: "Track your growth with comprehensive monthly performance reports and insights." }
      ]
    },
    "google-meta-ads": {
      title: "Google & Meta Ads",
      description: "High-performing paid advertising campaigns optimized for reach, leads, and ROI across Google, Facebook, and Instagram.",
      features: [
        { title: "Targeted Reach", desc: "Laser-focused audience targeting to ensure your ads are seen by potential buyers." },
        { title: "High ROI Optimization", desc: "Continuous monitoring and A/B testing to lower cost-per-click and boost conversions." },
        { title: "Cross-Platform Strategy", desc: "Unified campaigns across Google Search, Facebook feeds, and Instagram stories." }
      ]
    },
    "brand-awareness": {
      title: "Brand Awareness Campaigns",
      description: "Strategic campaigns focused on improving brand recall, credibility, and audience trust across digital channels.",
      features: [
        { title: "Strategic Positioning", desc: "Crafting a unique voice and visual identity that stands out in the market." },
        { title: "Maximum Exposure", desc: "Utilizing multiple digital touchpoints to keep your brand top-of-mind." },
        { title: "Trust Building", desc: "Establishing credibility through consistent, high-quality messaging and PR." }
      ]
    },
    "seo-online-visibility": {
      title: "SEO & Online Visibility",
      description: "Improve organic rankings, website traffic, and long-term online presence through ethical white-hat SEO strategies.",
      features: [
        { title: "Keyword Research", desc: "Identifying the high-intent search terms your customers are actively using." },
        { title: "On-Page Optimization", desc: "Optimizing website structure, meta tags, and content for search engines." },
        { title: "Quality Link Building", desc: "Acquiring authoritative backlinks to boost your domain authority." }
      ]
    },
    "content-writing": {
      title: "Content Writing",
      description: "High-quality content tailored for websites, ads, blogs, and social media to support brand messaging and conversions.",
      features: [
        { title: "SEO Blog Posts", desc: "Informative, keyword-rich articles that drive organic traffic to your site." },
        { title: "Compelling Ad Copy", desc: "Persuasive writing designed specifically to maximize ad click-through rates." },
        { title: "Website Copywriting", desc: "Clear, conversion-focused messaging for landing pages and corporate sites." }
      ]
    },
    "bulk-sms": {
      title: "Bulk SMS Service",
      description: "Promotional and transactional SMS solutions with high delivery rates for alerts, offers, and notifications.",
      features: [
        { title: "High Delivery Rates", desc: "Direct carrier connections ensure your messages reach the inbox instantly." },
        { title: "Cost Effective", desc: "Reach thousands of customers simultaneously without breaking your marketing budget." },
        { title: "Automated Triggers", desc: "Schedule messages or trigger them via API based on customer actions." }
      ]
    },
    "rcs-sms": {
      title: "RCS SMS Service",
      description: "Rich Communication Services enable interactive messaging with images, buttons, and branding.",
      features: [
        { title: "Fast Delivery", desc: "Messages delivered instantly with high reliability and read receipts." },
        { title: "Detailed Reports", desc: "Track campaign performance, delivery rates, and user interactions." },
        { title: "Easy Integration", desc: "Robust API integration for your existing apps, websites, and CRMs." }
      ]
    },
    "voice-sms": {
      title: "Voice SMS",
      description: "Automated voice messages for alerts, reminders, and campaigns, ideal for reaching users instantly.",
      features: [
        { title: "Instant Reach", desc: "Deliver pre-recorded voice messages to thousands of phones at once." },
        { title: "Personalized Touch", desc: "Add a human element to your automated broadcasts and alerts." },
        { title: "Easy Scheduling", desc: "Set up voice campaigns in advance for optimal delivery times." }
      ]
    },
    "whatsapp-api": {
      title: "WhatsApp Business API",
      description: "Meta-verified WhatsApp messaging for customer support, notifications, and conversational commerce.",
      features: [
        { title: "Verified Badge", desc: "Build trust with a verified green tick next to your business name." },
        { title: "Automated Chatbots", desc: "Provide 24/7 customer support with intelligent automated replies." },
        { title: "Rich Media Broadcasts", desc: "Send documents, videos, and interactive buttons directly to WhatsApp." }
      ]
    },
    "website-development": {
      title: "Website Design & Development",
      description: "Modern, responsive, and SEO-friendly websites designed to convert visitors into customers.",
      features: [
        { title: "Custom Design", desc: "Tailor-made visual layouts that perfectly match your brand identity." },
        { title: "Mobile Responsive", desc: "Flawless performance and aesthetics on desktops, tablets, and smartphones." },
        { title: "Fast Loading", desc: "Optimized code and assets for lightning-fast page load speeds." }
      ]
    },
    "app-development": {
      title: "Mobile App Development",
      description: "Custom mobile applications built for performance, scalability, and seamless user experience.",
      features: [
        { title: "iOS & Android", desc: "Cross-platform or native development to reach users on any device." },
        { title: "Scalable Architecture", desc: "Built with a robust backend to support thousands of concurrent users." },
        { title: "Intuitive UI/UX", desc: "User-centric design focused on ease of use and high retention." }
      ]
    },
    "landing-pages": {
      title: "High-Converting Landing Pages",
      description: "Targeted landing pages optimized specifically for ad campaigns, lead generation, and quick sales.",
      features: [
        { title: "A/B Testing Ready", desc: "Built to easily test different headlines and layouts to maximize conversions." },
        { title: "Lead Capture Forms", desc: "Seamless integration with your CRM or email marketing software." },
        { title: "Laser-Focused Content", desc: "Stripped of distractions to guide the user straight to the call-to-action." }
      ]
    }
  };

  // 2. FUNCTION TO LOAD A SPECIFIC SERVICE DYNAMICALLY
  function loadService(serviceId) {
    const data = servicesData[serviceId];
    if (!data) return;

    // A. Hide the main catalog, show the detail view
    document.getElementById('catalog-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';

    // B. Inject the text content
    document.getElementById('detail-title').innerText = data.title;
    document.getElementById('detail-description').innerText = data.description;
    document.getElementById('form-service-type').value = data.title; // Update the form hidden field

    // C. Inject the features dynamically
    const featuresContainer = document.getElementById('detail-features');
    featuresContainer.innerHTML = ''; // Clear old features
    
    data.features.forEach(feature => {
      const card = document.createElement('div');
      card.className = 'feature-card';
      card.innerHTML = `
        <h3>${feature.title}</h3>
        <p>${feature.desc}</p>
      `;
      featuresContainer.appendChild(card);
    });

    // D. Close the mobile menu if it is open
    if(navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
    }

    // E. Scroll instantly to the top so the user sees the new hero section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 3. FUNCTION TO GO BACK TO THE MAIN CATALOG GRID
  function showCatalog() {
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('catalog-view').style.display = 'block';
    
    if(navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  (function() {
  // ==========================================
  // FAIL-SAFE: HIDE PRELOADER TO PREVENT STUCK SCREEN
  // ==========================================
  const hidePreloader = () => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  };
  
  // Try to hide exactly when the page completes loading
  window.addEventListener('load', hidePreloader);
  
  // Absolute fallback: force hide it after 3 seconds in case of broken image links etc.
  setTimeout(hidePreloader, 3000);

  // ==========================================
  // MOBILE MENU
  // ==========================================
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.querySelector("header nav");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // ==========================================
  // TILT HOVER EFFECT
  // ==========================================
  document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 10;
      const rotateY = ((x / rect.width) - 0.5) * -10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });
  });

  // ==========================================
  // CASE STUDY POPUP LOGIC
  // ==========================================
  // const popup = document.getElementById("casePopup");
  // const title = document.getElementById("popupTitle");
  // const tag = document.getElementById("popupTag");
  // const intro = document.getElementById("popupIntro");
  // const challenge = document.getElementById("popupChallenge");
  // const solution = document.getElementById("popupSolution");
  // const benefits = document.getElementById("popupBenefits");

  // const data = {
  //   realestate: {
  //     tag: "Real Estate",
  //     title: "Real Estate Industry",
  //     intro: "Helping real estate businesses convert leads faster and build long-term buyer trust through intelligent communication.",
  //     challenge: "Managing high lead volumes, delayed follow-ups, and poor buyer engagement often results in lost sales opportunities.",
  //     solution: "We provide automated messaging, CRM integration, instant follow-ups, and personalized buyer journeys.",
  //     benefits: [
  //       "Faster lead response time",
  //       "Higher property inquiry conversions",
  //       "Automated site-visit reminders",
  //       "Improved customer trust"
  //     ]
  //   },
  //   education: {
  //     tag: "Education",
  //     title: "Education Industry",
  //     intro: "Connecting institutions, students, and parents with reliable, scalable communication solutions.",
  //     challenge: "Manual communication causes delays in admissions, updates, and student engagement.",
  //     solution: "Smart notification systems, admission alerts, and student engagement workflows.",
  //     benefits: [
  //       "Streamlined admissions",
  //       "Improved student communication",
  //       "Automated alerts & reminders",
  //       "Better parent engagement"
  //     ]
  //   },
  //   healthcare: {
  //     tag: "Healthcare",
  //     title: "Healthcare Industry",
  //     intro: "Secure, timely, and reliable patient communication that enhances care delivery.",
  //     challenge: "Missed appointments, delayed updates, and lack of patient follow-ups.",
  //     solution: "Automated appointment reminders, secure alerts, and real-time patient notifications.",
  //     benefits: [
  //       "Reduced no-shows",
  //       "Improved patient experience",
  //       "Secure communication",
  //       "Operational efficiency"
  //     ]
  //   },
  //   automobile: {
  //     tag: "Automobile",
  //     title: "Automobile Industry",
  //     intro: "Driving sales and after-sales engagement through customer-centric communication.",
  //     challenge: "Low test-drive conversions and weak after-sales follow-ups.",
  //     solution: "Lead automation, service reminders, and customer lifecycle messaging.",
  //     benefits: [
  //       "Higher test-drive bookings",
  //       "Improved service retention",
  //       "Customer loyalty growth",
  //       "Sales process automation"
  //     ]
  //   }
  // };

  // document.querySelectorAll(".know-more-btn").forEach(btn => {
  //   btn.addEventListener("click", () => {
  //     const d = data[btn.dataset.industry];
  //     if (d) {
  //       if(tag) tag.innerText = d.tag;
  //       if(title) title.innerText = d.title;
  //       if(intro) intro.innerText = d.intro;
  //       if(challenge) challenge.innerText = d.challenge;
  //       if(solution) solution.innerText = d.solution;

  //       if(benefits) {
  //         benefits.innerHTML = "";
  //         d.benefits.forEach(b => {
  //           benefits.innerHTML += `<li>${b}</li>`;
  //         });
  //       }
  //       if(popup) popup.classList.add("active");
  //     }
  //   });
  // });

  // if (popup) {
  //   popup.addEventListener("click", e => {
  //     if (e.target === popup || e.target.classList.contains("popup-close")) {
  //       popup.classList.remove("active");
  //     }
  //   });
  // }

  // ==========================================
  // SERVICES SLIDER LOGIC
  // ==========================================
  const nextBtn = document.querySelector(".services-next");
  const prevBtn = document.querySelector(".services-prev");
  const slideContainer = document.querySelector(".services-slide");

  if (nextBtn && prevBtn && slideContainer) {
    nextBtn.onclick = () => slideContainer.appendChild(slideContainer.firstElementChild);
    prevBtn.onclick = () => slideContainer.prepend(slideContainer.lastElementChild);
  }

  // ==========================================
  // HEADER HIDE & SCROLL TO TOP LOGIC
  // ==========================================
  let lastScrollTop = 0;
  const header = document.getElementById("main-header");
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide/Show Header
    if (header) {
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    // Show/Hide BackToTop Button
    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ==========================================
  // FOOTER EXPAND/COLLAPSE LOGIC
  // ==========================================
  
})();