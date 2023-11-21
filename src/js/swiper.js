
export const swiper = new Swiper(".swiper-container", {

    // текущее положение 
    pagination: {
        el: ".swiper-pagination",
        //булеты
        clickable: true,

    },
    // кол-во отображаемых слайдов 
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
});  

console.log("swiper work");
