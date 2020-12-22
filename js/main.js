"use strict!";

//Sticky Header on scroll
const header = document.querySelector('#header');
window.addEventListener('scroll', ()=> {
  if(window.scrollY > 0) {
    header.classList.add('sticky-header');
  } else {
    header.classList.remove('sticky-header');
  }
});


