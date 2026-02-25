document.addEventListener("DOMContentLoaded", () => {

  if (typeof gsap === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  /* =========================
     HERO (SOFT ENTRANCE)
  ========================= */
  gsap.from(".hero-slider .slide-text > *", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.15,
    ease: "power2.out"
  });

  gsap.from(".hero-slider .slide-image img", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });

  /* =========================
     SECTION REVEALS (CLEAN)
  ========================= */
  gsap.utils.toArray("section").forEach(section => {

    if (section.classList.contains("hero-slider")) return;

    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      },
      opacity: 0,
      y: 50,
      duration: 0.9,
      ease: "power2.out"
    });

  });

  /* =========================
     CARD REVEAL (SERVICES / CASES)
  ========================= */
  gsap.utils.toArray(".service-card, .card, .offer-card").forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%"
      },
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out"
    });
  });

  /* =========================
     TESTIMONIALS (SUBTLE)
  ========================= */
  gsap.from(".testimonial-card", {
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 85%"
    },
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out"
  });

});
