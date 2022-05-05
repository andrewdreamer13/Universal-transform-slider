"use strict";
// Slider
const slider = document.querySelector('.slider ');
const nextBtn = document.querySelector('.next-arrow');
const prevBtn = document.querySelector('.prev-arrow');
const images = document.querySelectorAll('.slider__card');
const dots = document.querySelectorAll('.slider__control-buton');


let count = 0;
let index = 0;
let dotCount;

// Next button control
nextBtn.addEventListener('click', function () {
 
  count = count + 100;
  console.log(count)
  index++;
  images.forEach((image) => {
    if (index >= images.length) {
      index--;
      count = count - 100;
    }
    image.style.transform = 'translate(-' + count + '%)';
  })
  // styles for active dot
  dots.forEach(dot => {
    if (index >= dots.length) {
      index--;
      count = count - 100;
    }
    dot.classList.remove('button-animated');
    dots[index].classList.add('button-animated');
  })
})
// functions for pressing next buttons
function nextButtonDown() {
  if (index == images.length - 1) {
    nextBtn.classList.add('disabled');
    nextBtn.classList.remove('pressed');
  }
  nextBtn.classList.add('pressed');
}

function nextButtonUp() {
  if (index == images.length - 1) {
    nextBtn.classList.remove('disabled');
    nextBtn.classList.add('pressed');
  }
  nextBtn.classList.remove('pressed');
}
// ------------------------------
nextBtn.addEventListener('mousedown', nextButtonDown);
nextBtn.addEventListener('mouseup', nextButtonUp);

nextBtn.addEventListener('touchstart', nextButtonDown);
nextBtn.addEventListener('touchend', nextButtonUp);

// Prev button control
prevBtn.addEventListener('click', function () {
  count = count - 100;
  index--;
  images.forEach((image, i) => {
    if (index <= 0) {
      index = 0;
      count = 0;
    }
    image.style.transform = 'translate(-' + count + '%)';
  })
  // styles for active dot
  dots.forEach(dot => {
    if (index <= 0) {
      index = 0;
      count = 0;
    }
    dot.classList.remove('button-animated');
    dots[index].classList.add('button-animated');
  })
})
// functions for pressing prev buttons
function prevButtonDown() {
  if (index == 0) {
    prevBtn.classList.add('disabled');
    prevBtn.classList.remove('pressed');
  }
  prevBtn.classList.add('pressed');
}

function prevButtonUp() {
  if (index == 0) {
    prevBtn.classList.remove('disabled');
    prevBtn.classList.add('pressed');
  }
  prevBtn.classList.remove('pressed');
}
//--------------------------------------
prevBtn.addEventListener('mousedown', prevButtonDown)
prevBtn.addEventListener('mouseup', prevButtonUp)

prevBtn.addEventListener('touchstart', prevButtonDown);
prevBtn.addEventListener('touchend', prevButtonUp);

// dots control
dots.forEach((dot,dotIndex)=>{
  dot.addEventListener('click',()=>{
    count = 100 * dotIndex;
    index = dotIndex;
    dots.forEach(dot =>{
      dot.classList.remove('button-animated');
    })
    dots[dotIndex].classList.add('button-animated');
    images.forEach((image)=>{
      image.style.transform = 'translate(-' + count + '%)';
    })
  })

})

