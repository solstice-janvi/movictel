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
  if (document.querySelector(".homeSwiper")) {
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
  }
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

  if(slider && nextBtn && prevBtn) {
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
  }
});

if (document.querySelector(".servicesSwiper")) {
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
}

if (document.querySelector(".mySwiper")) {
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
    centeredSlides: false,  
    slidesOffsetBefore: 20, 
    slidesOffsetAfter: 20,  
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    }
  });
}

if (document.querySelector(".caseSwiper")) {
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
}

// FAQ Section Script //
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
  const q = item.querySelector(".faq-question");
  if(q) {
    q.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  }
});

// Testimonial //
if (document.querySelector(".testimonialSwiper")) {
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
}

//festival offer section //
if (document.querySelector(".offerSwiper")) {
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
}

//drop down //
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector("li.dropdown > a");
  if(dropdown) {
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
  }
});

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

  const catalogView = document.getElementById('catalog-view');
  const detailView = document.getElementById('detail-view');
  if(catalogView) catalogView.style.display = 'none';
  if(detailView) detailView.style.display = 'block';

  const dTitle = document.getElementById('detail-title');
  const dDesc = document.getElementById('detail-description');
  const fType = document.getElementById('form-service-type');
  if(dTitle) dTitle.innerText = data.title;
  if(dDesc) dDesc.innerText = data.description;
  if(fType) fType.value = data.title; 

  const featuresContainer = document.getElementById('detail-features');
  if(featuresContainer) {
    featuresContainer.innerHTML = ''; 
    data.features.forEach(feature => {
      const card = document.createElement('div');
      card.className = 'feature-card';
      card.innerHTML = `<h3>${feature.title}</h3><p>${feature.desc}</p>`;
      featuresContainer.appendChild(card);
    });
  }

  const navMenu = document.querySelector("header nav");
  const menuToggle = document.getElementById("menuToggle");
  if(navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      if(menuToggle) menuToggle.classList.remove("active");
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCatalog() {
  const catalogView = document.getElementById('catalog-view');
  const detailView = document.getElementById('detail-view');
  if(detailView) detailView.style.display = 'none';
  if(catalogView) catalogView.style.display = 'block';
  
  const navMenu = document.querySelector("header nav");
  const menuToggle = document.getElementById("menuToggle");
  if(navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      if(menuToggle) menuToggle.classList.remove("active");
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

(function() {
  const hidePreloader = () => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  };
  window.addEventListener('load', hidePreloader);
  setTimeout(hidePreloader, 3000);

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.querySelector("header nav");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

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

  const nextBtn = document.querySelector(".services-next");
  const prevBtn = document.querySelector(".services-prev");
  const slideContainer = document.querySelector(".services-slide");
  if (nextBtn && prevBtn && slideContainer) {
    nextBtn.onclick = () => slideContainer.appendChild(slideContainer.firstElementChild);
    prevBtn.onclick = () => slideContainer.prepend(slideContainer.lastElementChild);
  }

  let lastScrollTop = 0;
  const header = document.getElementById("main-header");
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (header) {
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();

// ==========================================
// PURE 3D CASE STUDY CAROUSEL (CLEANED)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const caseTrack = document.querySelector(".carousel-track");
  const leftBtn = document.querySelector(".nav-arrow.left");
  const rightBtn = document.querySelector(".nav-arrow.right");
  let currentIndex = 0;

  if (!caseTrack) return;

  function updateCarousel() {
    // Dynamic query for CMS compatibility
    const cards = Array.from(caseTrack.querySelectorAll(".case-item")).filter(el => el.style.display !== 'none');
    const totalCards = cards.length;
    if (totalCards === 0) return;

    cards.forEach((card, index) => {
      // Force absolutely necessary 3D CSS via JS to override any broken external stylesheets
      card.style.setProperty('position', 'absolute', 'important');
      card.style.setProperty('left', '50%', 'important');
      card.style.setProperty('top', '50%', 'important');
      card.style.setProperty('margin', '-220px 0 0 -170px', 'important'); // Centers 340x440 card
      card.style.setProperty('width', '340px', 'important');
      card.style.setProperty('transition', 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 'important');

      if (index === currentIndex) {
        // Active Center Card
        card.style.setProperty('opacity', '1', 'important');
        card.style.setProperty('transform', 'scale(1) translateX(0)', 'important');
        card.style.setProperty('z-index', '5', 'important');
        card.style.setProperty('border', '2px solid #018eec', 'important');
        card.style.setProperty('pointer-events', 'auto', 'important');
      } 
      else if (index === (currentIndex - 1 + totalCards) % totalCards) {
        // Left Card
        card.style.setProperty('opacity', '0.6', 'important');
        card.style.setProperty('transform', 'translateX(-280px) scale(0.85)', 'important');
        card.style.setProperty('z-index', '3', 'important');
        card.style.setProperty('border', '1px solid #b3dfff', 'important');
        card.style.setProperty('pointer-events', 'none', 'important');
      } 
      else if (index === (currentIndex + 1) % totalCards) {
        // Right Card
        card.style.setProperty('opacity', '0.6', 'important');
        card.style.setProperty('transform', 'translateX(280px) scale(0.85)', 'important');
        card.style.setProperty('z-index', '3', 'important');
        card.style.setProperty('border', '1px solid #b3dfff', 'important');
        card.style.setProperty('pointer-events', 'none', 'important');
      }
      else {
        // Hidden Cards
        card.style.setProperty('opacity', '0', 'important');
        card.style.setProperty('transform', 'translateX(0) scale(0.5)', 'important');
        card.style.setProperty('z-index', '1', 'important');
        card.style.setProperty('pointer-events', 'none', 'important');
      }
    });
  }

  // Clone buttons to strip old duplicate event listeners attached from index.html inline scripts
  if (rightBtn) {
    const newRight = rightBtn.cloneNode(true);
    rightBtn.parentNode.replaceChild(newRight, rightBtn);
    newRight.addEventListener("click", function (e) {
      e.preventDefault();
      const totalCards = Array.from(caseTrack.querySelectorAll(".case-item")).filter(el => el.style.display !== 'none').length;
      if (totalCards > 0) {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
      }
    });
  }

  if (leftBtn) {
    const newLeft = leftBtn.cloneNode(true);
    leftBtn.parentNode.replaceChild(newLeft, leftBtn);
    newLeft.addEventListener("click", function (e) {
      e.preventDefault();
      const totalCards = Array.from(caseTrack.querySelectorAll(".case-item")).filter(el => el.style.display !== 'none').length;
      if (totalCards > 0) {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
      }
    });
  }

  // Initial load
  setTimeout(updateCarousel, 150);

  // Re-run if Firebase updates the cards
  document.addEventListener('firebaseDataLoaded', () => {
    currentIndex = 0;
    setTimeout(updateCarousel, 500);
  });
});


    // ... existing code ...
  // Clone buttons to strip old duplicate event listeners attached from index.html inline scripts
  if (rightBtn) {
    const newRight = rightBtn.cloneNode(true);
    rightBtn.parentNode.replaceChild(newRight, rightBtn);
    newRight.addEventListener("click", function (e) {
      e.preventDefault();
      const totalCards = Array.from(caseTrack.querySelectorAll(".case-item")).filter(el => el.style.display !== 'none').length;
      if (totalCards > 0) {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
      }

       if (leftBtn) {
    const newLeft = leftBtn.cloneNode(true);
    leftBtn.parentNode.replaceChild(newLeft, leftBtn);
    newLeft.addEventListener("click", function (e) {
      e.preventDefault();
      const totalCards = Array.from(caseTrack.querySelectorAll(".case-item")).filter(el => el.style.display !== 'none').length;
      if (totalCards > 0) {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
      }
    });
  }

  // --- UPDATED FAQ LOGIC (Fixes Truncation) ---
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      if (question.classList.contains('active')) {
        // FIX: Allow full expansion instead of scrollHeight clipping
        answer.style.maxHeight = "3000px"; 
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
  
});
  }
  // End of DOMContentLoaded
