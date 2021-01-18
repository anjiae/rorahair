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

//Handle navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', event => {
  const target = event.target;
  const link = target.dataset.link;

  if (link ===null) {
    return;
  }
  scrollIntoView(link);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}

//Show "arrow up" button
const home = document.querySelector('#home');
const arrowUp = document.querySelector('.arrow-up');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//handle "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView("#home");
});


//Services scroll event
function serviceBottom(ele, differ) {
  const {top} = ele.getBoundingClientRect();
  const {innerHeight} = window;
  return top > innerHeight + (differ || 0);
}

function scrollService() {
  const elems = document.querySelectorAll('.up-service');
  elems.forEach(list => {
    if(serviceBottom(list, -250)) {
      list.style.opacity = "0";
      list.style.transform = "translateY(100px)";
    }else {
      list.style.opacity = "1";
      list.style.transform = "translateY(0px)";
    }
  });
}

window.addEventListener('scroll', scrollService);

