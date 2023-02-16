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
