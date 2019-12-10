'use strict';

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slidesItem = document.querySelector('.slides');
let dotsItem = document.querySelectorAll('.slider-dots_item');
let dots = document.querySelector('.slider-dots');

let miniSlideItem = document.querySelector('.mini-slider__slides');
let miniDotsItem = document.querySelectorAll('.mini-slider-dots_item');
let miniDots = document.querySelector('.mini-slider__dots');

let slider = document.querySelector('.slider');
let miniSlider = document.querySelector('.mini-slider');

let modal = document.querySelector('.modal');

let link = document.querySelector('.modal-link');

let index = 0;

let scrollSliderFunc = function(n){
    index += n;

    if (index <= -400) {
        index = 0;
    } else if (index > 0) {
        index = -300;
    }

    slidesItem.style.left = `${index}%`;
    miniSlideItem.style.left = `${index}%`;


    for (let dot of dotsItem) {
        dot.classList.remove('active');
    }
    dotsItem[-index / 100].classList.add('active');
    for (let miniDot of miniDotsItem){
        miniDot.classList.remove('active');
    }
    miniDotsItem[-index / 100].classList.add('active');
}
let dotScrollFunc = function(n){
    scrollSliderFunc(index = -(n * 100 / 2));
}

prev.addEventListener('click', function() {
    scrollSliderFunc(100);
});
next.addEventListener('click', function(){
    scrollSliderFunc(-100);
});
dots.addEventListener('click', function(e) {
    for (let i = 0; i < dotsItem.length; i++) {
        if (e.target.classList.contains('slider-dots_item') && e.target == dotsItem[i]){
            dotScrollFunc(i);
        }
    }
    // clearInterval(interval);
    // clearTimeout(timeout);
    // timeout = setTimeout(function() {
    //   interval = setInterval(() => scrollFunc(-100), 3000); }, 3000);
});

miniDots.addEventListener('click', function (e) {
    for (let i = 0; i < miniDotsItem.length; i++){
        if ((e.target.classList.contains('mini-slider-dots_item') && e.target === miniDotsItem[i])){
            dotScrollFunc(i);
        }
    }
});

let interval = setInterval(function() {scrollSliderFunc(-100)}, 3000);

slider.addEventListener('mouseout', function() {
    interval = setInterval(function() {scrollSliderFunc(-100)}, 3000);
});
slider.addEventListener('mouseover', function() {
    clearInterval(interval);
});

miniSlider.addEventListener('mouseover', function() {
    clearInterval(interval);
});


window.addEventListener('click', function (e) {
    if (event.target === modal) {
        modal.style.display = "none";
        interval = setInterval(function() {scrollSliderFunc(-100)}, 3000);
    }
})

let button = document.querySelectorAll('.button');
let modCont = document.querySelector('.modal-content');
let modContTitle = document.querySelector('.modal-title');
let modContText = document.querySelector('.modal-description');

 for (let i = 0; i < button.length; i++){
     button[i].addEventListener('click', function (e) {
        let currentSlide = e.currentTarget;
        let modalTitle = currentSlide.parentElement.children[0].textContent;
        modContTitle.innerHTML = modalTitle;
        let modalContent = currentSlide.parentElement.children[1].textContent;
        modContText.textContent = modalContent;

         modal.style.display = 'flex';
        clearInterval(interval);
     });
 }


link.addEventListener('click', function (e) {
    modal.style.display = "none";
});





