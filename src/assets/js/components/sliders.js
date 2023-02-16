new Swiper('.youth__swiper-slider', {
    navigation: {
        nextEl: '.youth-swiper__next',
        prevEl: '.youth-swiper__prev',
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320:{
            slidesPerView: 1,
        },
        767:{
            slidesPerView: 2,
        },
        1023:{
            slidesPerView: 3,
        },
    },
    loop: true,
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlides: true,
    grabCursor: true,
});


new Swiper('.news-swiper__slider', {
    navigation: {
        nextEl: '.news-swiper__next',
        prevEl: '.news-swiper__prev',
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320:{
            slidesPerView: 1,
        },
        767:{
            slidesPerView: 2,
        },
        1023:{
            slidesPerView: 3,
        },
    },
    loop: true,
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 60,
    centeredSlides: true,
    grabCursor: true,
});