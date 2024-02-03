const heroLeft = document.querySelector(".hero__left");
const heroDescr = document.querySelector(".hero__descr");
const heroBtn = document.querySelector(".hero__btn");
const photosAuthor = document.querySelector(".photos__author");
const imgOne = document.querySelector(".photos-wrap img:nth-child(1)");
const imgTwo = document.querySelector(".photos-wrap img:nth-child(2)");
const imgThree = document.querySelector(".photos-wrap img:nth-child(3)");

const tl = gsap.timeline({ repeatDelay: 1 });

tl.from(heroLeft, { opacity: 0, y: 50, duration: 1 })
  .from(heroDescr, { opacity: 0, duration: 0.5 })
  .from(imgOne, { opacity: 0, scele: 0.1, duration: 0.2 })
  .from(imgTwo, { opacity: 0, scele: 0.1, duration: 0.2 })
  .from(imgThree, { opacity: 0, scele: 0.1, duration: 0.2 })
  .from(photosAuthor, { opacity: 0, duration: 0.5 });

const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

const tlMenuTop = gsap.timeline({ paused: true });
tlMenuTop.from(".menu__top", { opacity: 0, y: -80, duration: 0.3 });

const tlMenuBottom = gsap.timeline({ paused: true });
tlMenuBottom
  .from(".menu__bottom", { opacity: 0, y: 80, duration: 0.5 })
  .from(".nav__list", { opacity: 0, y: 80, duration: 0.3 })
  .from(".social", { opacity: 0, y: 80, duration: 0.1 })
  .from(".menu__right", { opacity: 0, y: 80, duration: 0.2 });

burger.addEventListener("click", function() {
  menu.classList.add("menu--open");
  tlMenuTop.play();
  tlMenuBottom.play();
});
close.addEventListener("click", function() {
  tlMenuTop.reverse();
  tlMenuBottom.reverse();
  setTimeout(function() {
    menu.classList.remove("menu--open");
  }, 1000);
});