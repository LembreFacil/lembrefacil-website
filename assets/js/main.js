var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  watchOverflow: true, // Evita a exibição de botões se há menos slides do que o exibido
});
