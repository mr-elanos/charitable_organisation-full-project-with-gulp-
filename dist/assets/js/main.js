let menuBtn = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__burger-menu');
let navBtns = document.querySelectorAll('#burger-btn')
let body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('header__burger-btn-active');
	menu.classList.toggle('header__burger-menu-active');
    body.classList.toggle('scroll__hidden');
})
navBtns.forEach(btn =>{
    btn.addEventListener('click', function(e){
        menuBtn.classList.remove('header__burger-btn-active');
        menu.classList.remove('header__burger-menu-active');
        body.classList.remove('scroll__hidden');
    })
})
const acc = document.querySelectorAll(".accordion");
acc.forEach(e => {
    e.addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
});
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