const jumbotronAbout = document.querySelector(".jumbotron");
const nameAbout = document.querySelector(".col-sm-6");
const navAbout = document.getElementsByTagName("a");
const footerLinksAbout = document.getElementById("footer-row");
const icons = document.getElementsByTagName("i");

const sliderAbout = document.querySelector(".slider-about");
const selfie = document.querySelector('.selfie');
const title = document.querySelector('.about-me');
const text = document.querySelector('.about-me-text');

const tl2 = new TimelineMax();
tl2.fromTo(jumbotronAbout, 1.2, {width: "80%"}, {width: "80%", ease: Power3.easeInOut}).fromTo(sliderAbout, 1.2, { y:"-100%"}, {y: "0%", ease: Power2.easeInOut}, "-=1").fromTo(title, 0.7, {opacity: 0, y: -65}, {opacity: 1, y: -40}, "-=0.8").fromTo(text, 1, {opacity: 0, x: -150}, {opacity: 1, x: -50}, "-=0.8").fromTo(nameAbout, 0.5, {color: "white"}, {color: "black"}, "-=1.2").fromTo(navAbout, 0.3, {color: "white"}, {color: "black"}, "-=1" ).fromTo(footerLinksAbout, 0.3, {color: "white"}, {color: "black"},"-=0.7").fromTo(selfie, 1.3, {opacity: 0, y: "-70"}, {opacity: 1, y: "0"}, "-=1.1").to   (icons, 0.1, {color: 'black'},'-=0.7')