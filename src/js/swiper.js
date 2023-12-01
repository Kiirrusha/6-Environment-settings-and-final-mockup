
export const swiper = new Swiper(".swiper-container", {

    // текущее положение 
    pagination: {
        el: ".swiper-pagination",
        //булеты
        clickable: true,

    },
    // кол-во отображаемых слайдов 
    // 
    slidesPerView: 1.25,
    // расстояние между слайдерами
    spaceBetween: 16,
    // размщение слайда по центру, отключил для корректного изображения  
    centeredSlides: false,
    //  бесконечная прокрутка
    loop: true,
    // автопрокрутка
    // autoplay: {
    //     // скорость
    //     delay: 3000,
    //     // не стопать на ласт слайде
    //     stopOnLastSlide: false,
    //     // не отключать автопрокрутку после взаимодействия с ней
    //     disableOnInteraction: false,
    // }

    breakpoints: {
        320: {
          slidesPerView: 1.15,
        },
        340: {
          slidesPerView: 1.3,
        },
        380: {
          slidesPerView: 1.4,
        },
        420: {
          slidesPerView: 1.5,
        },
        460: {
          slidesPerView: 1.6,
        },
        500: {
          slidesPerView: 1.8,
        },
        540: {
          slidesPerView: 2.0,
        },
        600: {
          slidesPerView: 2.3,
        },
        640: {
          slidesPerView: 2.4,
        },
        680: {
          slidesPerView: 2.5,
        },
        720: {
          slidesPerView: 2.6,
        },
        767: {
          slidesPerView: 2.7,
        },
      }
});  

export const swiper_2 = new Swiper(".prices-swiper", {

    // текущее положение 
    pagination: {
        el: ".swiper-pagination",
        //булеты
        clickable: true,

    },
    // кол-во отображаемых слайдов 
    slidesPerView: 1.25,
    // расстояние между слайдерами
    spaceBetween: 35,
    // размщение слайда по центру, отключил для корректного изображения  
    centeredSlides: false,
    //  бесконечная прокрутка
    loop: true,
    
    // автопрокрутка
    // autoplay: {
    //     // скорость
    //     delay: 3000,
    //     // не стопать на ласт слайде
    //     stopOnLastSlide: false,
    //     // не отключать автопрокрутку после взаимодействия с ней
    //     disableOnInteraction: false,
    // }

    breakpoints: {
        320: {
          slidesPerView: 1.25,
        },
        340: {
          slidesPerView: 1.3,
        },
        380: {
          slidesPerView: 1.4,
        },
        420: {
          slidesPerView: 1.5,
        },
        460: {
          slidesPerView: 1.6,
        },
        500: {
          slidesPerView: 1.8,
        },
        540: {
          slidesPerView: 2.2,
        },
        600: {
          slidesPerView: 2.3,
        },
        640: {
          slidesPerView: 2.4,
        },
        680: {
          slidesPerView: 2.5,
        },
        720: {
          slidesPerView: 2.6,
        },
        767: {
          slidesPerView: 2.7,
        },
      }
});  

console.log("swiper work");
