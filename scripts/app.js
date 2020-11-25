var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var slider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 150,
  loop: true,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function() {
      gsap.to(".slide-number span", 0.2, {
        x: "-100px"
      });
      gsap.to(".slide-text span", 0.2, {
        x: "-100px"
      });
    },

    slideChangeTransitionEnd: function() {
      gsap.to(".slide-number span", 0.2, {
        x: 0,
        delay: 0.1
      });
      gsap.to(".slide-number span", 0, {
        x: "100px"
      });
    
      gsap.to(".slide-text span", 0.2, {
        x: 0
      });
      gsap.to(".slide-text span", 0, {
        x: "100px"
      });
    
      gsap.to(".swiper-slide-active", 0.5, {
        scale: 1,
        ease: Power4.easeOut
      });
    
      gsap.to(".swiper-slide-active .slide-number", 0, {
        autoAlpha: 1
      });
      gsap.to(".swiper-slide-active .slide-text", 0, {
        autoAlpha: 1
      });
    
      gsap.to(".swiper-slide-next .slide-number", 0, {
        autoAlpha: 0
      });
      gsap.to(".swiper-slide-prev .slide-number", 0, {
        autoAlpha: 0
      });
    
      gsap.to(".swiper-slide-next .slide-text", 0, {
        autoAlpha: 0
      });
      gsap.to(".swiper-slide-prev .slide-text", 0, {
        autoAlpha: 0
      });
    }
  },
});




