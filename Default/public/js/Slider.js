'use strict';

let Slide = 1;
const imglink = document.querySelector(".slider__photo");
let autoSlide = true;
let carousel;
const buttons = document.querySelectorAll(".slider__button");

buttons[0].addEventListener('click', function() { prevSlide()});
buttons[1].addEventListener('click', function() { NewSlide()});
buttons[2].addEventListener('click', function() { pause()});


const prevSlide = () => {
    if (Slide > 1 && Slide < 5) {
        Slide--;
    } else {
        Slide = 4;
    }

    imglink.src = `img/slide${Slide}.jpg`;

    if (autoSlide) {
        window.clearInterval(carousel);
        carousel = window.setInterval(NewSlide, 1500);
    }
}

const NewSlide = () => {
    if (Slide < 4 && Slide > 0) {
        Slide++;
    } else {
        Slide = 1;
    }

    imglink.src = `img/slide${Slide}.jpg`;

    if (autoSlide) {
        window.clearInterval(carousel);
        carousel = window.setInterval(NewSlide, 1500);
    }
}

const pause = () => {
    if (autoSlide) {
        window.clearInterval(carousel);
        autoSlide = false
    } else if(!autoSlide) {
        carousel = window.setInterval(NewSlide, 1500);
        autoSlide = true;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        prevSlide();
    }

    if(event.key === "ArrowRight") {
        NewSlide();
    }
});

carousel = window.setInterval(NewSlide, 1500);