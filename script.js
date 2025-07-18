function bookNow() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }

  function submitForm(event) {
    event.preventDefault();
    alert("Thank you for contacting us. We'll get back to you shortly.");
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-text", {
    x: -100,
    opacity: 0,
    duration: 1.2
  });

  gsap.from(".hero-image", {
    x: 100,
    opacity: 0,
    duration: 1.2
  });

  gsap.utils.toArray(".service").forEach(service => {
    gsap.from(service, {
      scrollTrigger: {
        trigger: service,
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  });

  gsap.from("form", {
    scrollTrigger: {
      trigger: "form",
      start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 1
  });