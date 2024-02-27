/* -------------------------------------------------------------------------- */
/*                                   SWIPER                                   */
/* -------------------------------------------------------------------------- */

/* ------------------------------- Hero SLider ------------------------------ */
var swiper = new Swiper("#heroSlider", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 8000,
        disableOnInteraction: true,
    },
});

/* -------------------------- Publicaciones Slider -------------------------- */
var swiper = new Swiper("#publicaciones", {
    cssMode: true,
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
