'use strict';

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slidesItem = document.querySelector('.slides');
let dotsItem = document.getElementsByClassName('slider-dots_item');
let dots = document.querySelector('.slider-dots');
let sliderButton = document.querySelectorAll('.slider-arrow');

let miniSlideItem = document.querySelector('.mini-slider__slides');
let miniDotsItem = document.getElementsByClassName('mini-slider-dots_item');
let miniDots = document.querySelector('.mini-slider__dots');

let slider = document.querySelector('.slider');
let miniSlider = document.querySelector('.mini-slider');

let modal = document.querySelector('.modal');
let link = document.querySelector('.modal-link');

let slides = document.querySelectorAll('.slider-item');
let indent = slides.length;
let index = 0;

slidesItem.style.width = (indent * 100) + "%";

// console.log(dotsItem);

let modalImg = document.querySelector('.modal-image');

for (let i = 0; i < slides.length; i++){
    let createDot = document.createElement('span');
    let createMinieDot = document.createElement('span');
    dots.appendChild(createDot);
    miniDots.appendChild(createMinieDot);
    createDot.className = 'slider-dots_item';
    createMinieDot.className = 'mini-slider-dots_item';
}


dotsItem[0].classList.add('active');
miniDotsItem[0].classList.add('active');
// console.log(dotsItem[0]);
// dotsItem[0].classList.add('active');

let scrollSliderFunc = function(n){

    index += n;

    if (index <= -(indent) * 100){
        index = 0;
    } else if(index > 0){
        index = -(indent) * 100;
    }

    // if (index <= -400) {
    //     index = 0;
    // } else if (index > 0) {
    //     index = -300;
    // }

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

slider.addEventListener('mouseover', function() {
    for (let i = 0; i < sliderButton.length; i++) {
        // sliderButton[i].style.opacity = '1';
        sliderButton[i].style.display = 'flex';
    }
    clearInterval(interval);
});

miniSlider.addEventListener('mouseover', function() {
    clearInterval(interval);
});

slider.addEventListener('mouseout', function() {
    for (let i = 0; i < sliderButton.length; i++) {
        // sliderButton[i].style.opacity = '0';
        sliderButton[i].style.display = 'none';
    }
    interval = setInterval(function() {scrollSliderFunc(-100)}, 3000);
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

         if (e.target === button[i]) {
             let slideImg = slides[i].style.backgroundImage;
             modalImg.style.backgroundImage = `url(img/slide${[i+1]}.jpg`;
             modalImg.style.display = "flex";
         }

        modal.style.display = 'flex';
        clearInterval(interval);
     });
 }


link.addEventListener('click', function (e) {
    modal.style.display = "none";
});





