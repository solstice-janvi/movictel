setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.classList.add("hide");
    }
  }, 2000); 

// Run when DOM is loaded for basic UI setup
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
  if(document.querySelector('.homeSwiper')) {
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
let lastScrollTop = 0;
const header = document.getElementById("main-header");
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Header Style toggle
  if (scrollTop > 50) {
    if(header) header.classList.add("scrolled");
  } else {
    if(header) header.classList.remove("scrolled");
  }
  
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// Footer Toggle Button Enhancement
const footerToggleBtn = document.getElementById("footerToggleBtn");
const footerCollapsible = document.getElementById("footerCollapsible");

if (footerToggleBtn && footerCollapsible) {
  footerToggleBtn.addEventListener("click", () => {
    footerToggleBtn.classList.toggle("open");
    footerCollapsible.classList.toggle("open");
    
    const spanText = footerToggleBtn.querySelector("span");
    if(spanText) {
      if (footerToggleBtn.classList.contains("open")) {
        spanText.textContent = "Hide Footer";
      } else {
        spanText.textContent = "Show Footer";
      }
    }
  });
}

// -------------------------------------------------------------
// DYNAMIC FIREBASE DATA RENDERER (Listens to the Pure Firebase Event)
// -------------------------------------------------------------
let servicesData = {}; // Global variable to store mapped services

document.addEventListener('firebaseDataLoaded', (e) => {
    const data = e.detail;
    
    if(!data) return;

    // 0. SECTION VISIBILITY CONTROLS
    if(data.sections) {
        const toggleVis = (selector, isVisible) => {
            const els = document.querySelectorAll(selector);
            els.forEach(el => el.style.display = isVisible ? '' : 'none');
        };
        toggleVis('.hero-slider, .banner-section', data.sections.hero !== false);
        toggleVis('.who-we-are', data.sections.about !== false);
        toggleVis('.festival-offers', data.sections.offers !== false);
        toggleVis('.services-section', data.sections.services !== false);
        toggleVis('.case-elegant', data.sections.cases !== false);
        toggleVis('.about-section', data.sections.aboutUs !== false);
        toggleVis('.client-flow', data.sections.clients !== false);
        toggleVis('.faq-section', data.sections.faq !== false);
        toggleVis('.split-testimonial-wrap', data.sections.testimonials !== false);
    }

    // 1. UPDATE HEADER AND FOOTER SERVICE LINKS
    if (data.detailedServices && Array.isArray(data.detailedServices)) {
        
        // Rebuild global services data object for the catalog to use later
        servicesData = {};
        data.detailedServices.forEach(s => {
            servicesData[s.id] = {
                title: s.title,
                description: s.longDesc || s.shortDesc,
                features: []
            };
            if(s.f1T) servicesData[s.id].features.push({title: s.f1T, desc: s.f1D});
            if(s.f2T) servicesData[s.id].features.push({title: s.f2T, desc: s.f2D});
            if(s.f3T) servicesData[s.id].features.push({title: s.f3T, desc: s.f3D});
        });

        // Headers
        const headMarketing = document.querySelector("nav .dropdown-menu > li:nth-child(1) .submenu");
        const headPromote = document.querySelector("nav .dropdown-menu > li:nth-child(2) .submenu");
        const headDev = document.querySelector("nav .dropdown-menu > li:nth-child(3) .submenu");
        if(headMarketing) headMarketing.innerHTML = '';
        if(headPromote) headPromote.innerHTML = '';
        if(headDev) headDev.innerHTML = '';

        // Footers
        const footMarketing = document.querySelector(".footer-service-group:nth-child(1) ul");
        const footPromote = document.querySelector(".footer-service-group:nth-child(2) ul");
        const footDev = document.querySelector(".footer-service-group:nth-child(3) ul");
        if(footMarketing) footMarketing.innerHTML = '';
        if(footPromote) footPromote.innerHTML = '';
        if(footDev) footDev.innerHTML = '';
        
        // Catalog Grid (Services Page)
        const allGrids = document.querySelectorAll(".subservice-grid");
        const gridMarketing = allGrids.length >= 1 ? allGrids[0] : null;
        const gridPromote = allGrids.length >= 2 ? allGrids[1] : null;
        const gridDev = allGrids.length >= 3 ? allGrids[2] : null;
        
        if(gridMarketing) gridMarketing.innerHTML = '';
        if(gridPromote) gridPromote.innerHTML = '';
        if(gridDev) gridDev.innerHTML = '';

        data.detailedServices.forEach(s => {
            // Header Inject
            let targetHead = s.category === 'Marketing' ? headMarketing : (s.category === 'Promote' ? headPromote : headDev);
            if(targetHead) targetHead.innerHTML += `<li><a href="services.html#${s.id}"><i class="${s.navIcon}"></i>${s.title}</a></li>`;
            
            // Footer Inject
            let targetFoot = s.category === 'Marketing' ? footMarketing : (s.category === 'Promote' ? footPromote : footDev);
            if(targetFoot) targetFoot.innerHTML += `<li><a href="services.html#${s.id}">${s.title}</a></li>`;
            
            // Grid Inject (Services Page)
            let targetGrid = s.category === 'Marketing' ? gridMarketing : (s.category === 'Promote' ? gridPromote : gridDev);
            if(targetGrid) {
                targetGrid.innerHTML += `
                  <div class="subservice-card" onclick="loadService('${s.id}')">
                    <h4>${s.title}</h4>
                    <p>${s.shortDesc}</p>
                    <span>Learn More <i class="fa-solid fa-arrow-right"></i></span>
                  </div>
                `;
            }
        });
        
        // Check Hash for direct linking to detailed service
        const requestedService = window.location.hash.substring(1); 
        if (requestedService && servicesData[requestedService]) {
            loadService(requestedService);
        }
    }

    // 2. HERO SLIDER
    const bannerWrapper = document.getElementById('bannerWrapper');
    if (bannerWrapper && data.hero && Array.isArray(data.hero)) {
      bannerWrapper.innerHTML = ''; 
      data.hero.forEach((slide) => {
         const div = document.createElement('div');
         div.className = 'swiper-slide';
         div.innerHTML = `<img src="${slide.image}" alt="Banner Image">`;
         bannerWrapper.appendChild(div);
      });
      // Re-init Swiper if needed
      if(window.bannerSwiperInstance) window.bannerSwiperInstance.update();
    }

    // 3. ABOUT SECTION (Who We Are)
    const aboutEl = document.querySelector('.who-we-are');
    if (aboutEl && data.about) {
      const h2 = aboutEl.querySelector('.text-content h2');
      const p = aboutEl.querySelector('.text-content p');
      const img = aboutEl.querySelector('.image-content img');
      if(h2) h2.innerHTML = data.about.title || '';
      if(p) p.innerHTML = data.about.text || '';
      if(img) img.src = data.about.image || '';
    }

    // 4. FESTIVAL OFFERS
    const offersSec = document.querySelector('.festival-offers');
    if (offersSec && data.offers) {
      const h2 = offersSec.querySelector('h2');
      if(h2) h2.innerHTML = data.offersHeading || '';
      const subtext = offersSec.querySelector('.sub-text');
      if(subtext) subtext.innerHTML = data.offersSubtext || '';
      
      const wrapper = offersSec.querySelector('.swiper-wrapper');
      if(wrapper) {
          wrapper.innerHTML = '';
          data.offers.forEach(o => {
             const slide = document.createElement('div');
             slide.className = 'swiper-slide';
             slide.innerHTML = `
              <div class="offer-card festival-bg" style="background-image: url('${o.bgImage}');">
                <div class="offer-overlay"></div>
                <div class="offer-content">
                  <h3>${o.title}</h3>
                  <p>${o.text}</p>
                  <a href="${o.link}" class="btn">Grab Offer</a>
                </div>
              </div>`;
             wrapper.appendChild(slide);
          });
      }
    }

    // 5. MAIN SERVICES SECTION ON HOME PAGE
    const srvSec = document.querySelector('.services-section');
    if (srvSec && data.services) {
      const h2 = srvSec.querySelector('.section-heading h2');
      if(h2) h2.innerHTML = data.servicesHeading || 'Our Services';
      const grid = srvSec.querySelector('.services-grid');
      if(grid) {
          grid.innerHTML = ''; 
          const classes = ['sc3', 'sc1', 'sc2'];
          data.services.forEach((s, i) => {
             const c = classes[i % classes.length];
             
             let subServicesHtml = '';
             if (data.detailedServices) {
                 const catServices = data.detailedServices.filter(ds => ds.category === s.title);
                 catServices.forEach(ds => {
                     subServicesHtml += `<li><a href="services.html#${ds.id}">${ds.title}</a></li>`;
                 });
             } else {
                 subServicesHtml += `<li><a href="${s.link}">Learn More</a></li>`;
             }
             
             const div = document.createElement('div');
             div.className = `ser-card ${c}`;
             div.innerHTML = `
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
                <ul class="sub-services">
                    ${subServicesHtml}
                </ul>
             `;
             grid.appendChild(div);
          });
      }
    }

    // 6. CASE STUDIES (Dynamic DOM generation AND Binding)
    const caseSec = document.querySelector('.case-elegant');
    if (caseSec && data.cases) {
      const h2 = caseSec.querySelector('.case-header h2');
      const hl = caseSec.querySelector('.case-header .highlight');
      const st = caseSec.querySelector('.case-header .subtext');
      if(h2) h2.innerHTML = data.casesHeading || '';
      if(hl) hl.innerHTML = data.casesHighlight || '';
      if(st) st.innerHTML = data.casesSubtext || '';
      
      const track = caseSec.querySelector('.carousel-track');
      if (track) {
         track.innerHTML = '';
         data.cases.forEach((c, i) => {
            const div = document.createElement('div');
            div.className = 'case-item';
            div.dataset.index = i;
            div.innerHTML = `
              <div class="img"><img src="${c.image}" alt="${c.title}"></div>
              <h3>${c.title}</h3>
              <p>${c.cardDesc}</p>
              <a href="javascript:void(0)" class="know-more-btn cms-case-btn" data-index="${i}">Know More</a>
            `;
            track.appendChild(div);
         });
         
         // Trigger the manual carousel logic to recognize new items
         setupCustomCarousel();
         
         // Bind Popups
         track.querySelectorAll('.cms-case-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
               const idx = e.target.getAttribute('data-index');
               const d = data.cases[idx];
               if (d) {
                 const tag = document.getElementById("popupTag");
                 const title = document.getElementById("popupTitle");
                 const intro = document.getElementById("popupIntro");
                 const challenge = document.getElementById("popupChallenge");
                 const solution = document.getElementById("popupSolution");
                 const benefits = document.getElementById("popupBenefits");
                 const popup = document.getElementById("casePopup");

                 if(tag) tag.innerText = d.tag;
                 if(title) title.innerText = d.title;
                 if(intro) intro.innerText = d.popupIntro || '';
                 if(challenge) challenge.innerText = d.challenge || '';
                 if(solution) solution.innerText = d.solution || '';
                 
                 if(benefits) {
                   benefits.innerHTML = "";
                   if(d.benefits) {
                      d.benefits.split('\n').forEach(b => {
                         if(b.trim()) benefits.innerHTML += `<li>${b}</li>`;
                      });
                   }
                 }
                 if(popup) popup.style.display = 'flex';
               }
            });
         });
      }
    }

    // 7. HOME ABOUT US (Lower Section)
    const homeAboutSec = document.querySelector('.about-section');
    if(homeAboutSec && data.homeAbout) {
       const badge = homeAboutSec.querySelector('.about-badge');
       if(badge) badge.innerHTML = data.homeAbout.badge;
       
       const title = homeAboutSec.querySelector('h2');
       if(title) title.innerHTML = data.homeAbout.title;
       
       const ps = homeAboutSec.querySelectorAll('p');
       if(ps[0]) ps[0].innerHTML = data.homeAbout.p1;
       if(ps[1]) ps[1].innerHTML = data.homeAbout.p2;
       
       const btn = homeAboutSec.querySelector('.about-btn');
       if(btn) { btn.innerHTML = data.homeAbout.btnText; btn.href = data.homeAbout.btnLink; }
       
       const img = homeAboutSec.querySelector('.illustration-card img');
       if(img) img.src = data.homeAbout.image;
    }

    // 8. CLIENTS STRIP
    const clientSec = document.querySelector('.client-flow');
    if(clientSec && data.clients) {
        const h2 = clientSec.querySelector('h2');
        if(h2) h2.innerHTML = data.clientsHeading || '';
        
        const track = clientSec.querySelector('.flow-track');
        if(track) {
            track.innerHTML = '';
            const appendClients = () => {
               data.clients.forEach(c => {
                  const div = document.createElement('div');
                  div.className = 'flow-card';
                  div.innerHTML = `<img src="${c.image}"><span>${c.name}</span>`;
                  track.appendChild(div);
               });
            };
            appendClients();
            appendClients(); // Duplicate for infinite scroll CSS effect
        }
    }

    // 9. FAQS
    const faqSec = document.querySelector('.faq-section');
    if (faqSec && data.faqs) {
      const h2 = faqSec.querySelector('h2');
      const h3 = faqSec.querySelector('h3');
      if(h2) h2.innerHTML = data.faqsHeading || 'Frequently Asked Questions';
      if(h3) h3.innerHTML = data.faqsSubHeading || '';
      
      const faqCont = faqSec.querySelector('.faq-container');
      if(faqCont) {
          faqCont.innerHTML = '';
          data.faqs.forEach(f => {
              const div = document.createElement('div');
              div.className = 'faq-item';
              div.innerHTML = `
                <button class="faq-question">${f.q} <span class="icon">+</span></button>
                <div class="faq-answer"><p>${f.a}</p></div>
              `;
              faqCont.appendChild(div);
          });
          
          // Rebind Accordion Listeners
          faqCont.querySelectorAll(".faq-item").forEach(item => {
            item.querySelector(".faq-question").addEventListener("click", () => {
              item.classList.toggle("active");
            });
          });
      }
    }

    // 10. TESTIMONIALS
    const testiSec = document.querySelector('.split-testimonial-wrap');
    if (testiSec && data.testimonials) {
      const h2 = testiSec.querySelector('.testi-left-content h2');
      const p = testiSec.querySelector('.testi-left-content p');
      if(h2) h2.innerHTML = data.testimonialsHeading || '';
      if(p) p.innerHTML = data.testimonialsText || '';
      
      const swiperWrap = testiSec.querySelector('.splitTestimonialSwiper .swiper-wrapper');
      if (swiperWrap) {
         swiperWrap.innerHTML = '';
         data.testimonials.forEach(t => {
            const div = document.createElement('div');
            div.className = 'swiper-slide';
            div.innerHTML = `
              <div class="split-testi-card">
                <p class="testi-text">${t.quote}</p>
                <div class="testi-author-info">
                  <h4 class="testi-author-name">${t.name}</h4>
                  <span class="testi-author-role">${t.role}</span>
                </div>
              </div>
            `;
            swiperWrap.appendChild(div);
         });
      }
    }
    
    // 11. ABOUT PAGE (Inner Page)
    if (data.aboutPage) {
        const heroText = document.querySelector('.about-hero h1');
        if (heroText) heroText.innerHTML = data.aboutPage.heroTitle || '';

        const aboutSec2 = document.querySelector('.about-section');
        if (aboutSec2) {
            const h2 = aboutSec2.querySelector('.about-text h2');
            const p = aboutSec2.querySelector('.about-text p');
            const img = aboutSec2.querySelector('img');
            if (h2) h2.innerHTML = data.aboutPage.whoWeAreTitle || '';
            if (p) p.innerHTML = data.aboutPage.whoWeAreText || '';
            if (img) img.src = data.aboutPage.whoWeAreImage || '';
        }

        const valuesSec = document.querySelector('.values');
        if (valuesSec && data.aboutPage.values) {
            const h2 = valuesSec.querySelector('h2');
            if (h2) h2.innerHTML = data.aboutPage.valuesHeading || '';
            
            const cardsCont = valuesSec.querySelector('.values-cards');
            if(cardsCont) {
                cardsCont.innerHTML = '';
                data.aboutPage.values.forEach(v => {
                    const div = document.createElement('div');
                    div.className = 'value-card';
                    div.innerHTML = `<h3>${v.title}</h3><p>${v.text}</p>`;
                    cardsCont.appendChild(div);
                });
            }
        }

        const teamSec = document.querySelector('.team');
        if (teamSec && data.aboutPage.team) {
            const h2 = teamSec.querySelector('h2');
            if (h2) h2.innerHTML = data.aboutPage.teamHeading || '';
            
            const cardsCont = teamSec.querySelector('.team-cards');
            if(cardsCont) {
                cardsCont.innerHTML = '';
                data.aboutPage.team.forEach(t => {
                    const div = document.createElement('div');
                    div.className = 'team-card';
                    div.innerHTML = `<img src="${t.image}" alt="${t.name}"><h4>${t.name}</h4><p>${t.role}</p>`;
                    cardsCont.appendChild(div);
                });
            }
        }
    }
    
    // 12. BLOG PAGE (Inner Page)
    if(data.blogPage) {
        const heroText = document.querySelector('.blog-hero h1');
        if (heroText && data.blogPage.heroTitle) heroText.innerHTML = data.blogPage.heroTitle;

        const sectionHeading = document.querySelector('.blog-section h2');
        if (sectionHeading && data.blogPage.sectionHeading) sectionHeading.innerHTML = data.blogPage.sectionHeading;

        const grid = document.querySelector('.blog-grid');
        if (grid && data.blogPage.blogs) {
            grid.innerHTML = '';
            data.blogPage.blogs.forEach(b => {
                const div = document.createElement('div');
                div.className = 'blog-card';
                div.innerHTML = `
                  <img src="${b.image}" alt="${b.title}">
                  <div class="blog-card-content">
                    <h3>${b.title}</h3>
                    <p>${b.desc}</p>
                    <a href="${b.link}"><span>Read More</span></a>
                  </div>
                `;
                grid.appendChild(div);
            });
        }
    }
});


// -------------------------------------------------------------
// STANDALONE FUNCTIONS & LISTENERS
// -------------------------------------------------------------

// Popup logic
window.closePopup = function() {
  const popup = document.getElementById('casePopup');
  if(popup) popup.style.display = 'none';
}
const globalPopup = document.getElementById("casePopup");
if (globalPopup) {
    globalPopup.addEventListener("click", e => {
      if (e.target === globalPopup || e.target.classList.contains("popup-close")) {
        globalPopup.style.display = 'none';
      }
    });
}

// Global Load Service Logic
window.loadService = function(serviceId) {
    const data = servicesData[serviceId];
    if (!data) return;

    const catalogView = document.getElementById('catalog-view');
    const detailView = document.getElementById('detail-view');
    if(!catalogView || !detailView) return;

    catalogView.style.display = 'none';
    detailView.style.display = 'block';

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

window.showCatalog = function() {
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

// -------------------------------------------------------------
// CUSTOM CAROUSEL LOGIC FOR CASE STUDIES
// -------------------------------------------------------------
function setupCustomCarousel() {
    const cards2 = document.querySelectorAll(".case-item");
    const leftBtn = document.querySelector(".nav-arrow.left");
    const rightBtn = document.querySelector(".nav-arrow.right");
    const memberName = document.querySelector(".member-name");
    
    if(cards2.length === 0 || !leftBtn || !rightBtn) return;

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

      if(memberName && cards2[currentIndex]) {
          const activeTitle = cards2[currentIndex].querySelector("h3");
          if(activeTitle) memberName.textContent = activeTitle.innerText + " Industry";
      }
    }

    // Overwrite existing listeners to prevent duplicates
    rightBtn.onclick = function () {
      currentIndex = (currentIndex + 1) % totalCards;
      updateCarousel();
    };

    leftBtn.onclick = function () {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateCarousel();
    };

    updateCarousel();
}
