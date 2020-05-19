const jumbotronExp = document.querySelector(".jumbotron");
const nameExp = document.querySelector(".col-sm-6");
const navExp = document.getElementsByTagName("a");
const footerLinksExp = document.getElementById("footer-row");
const iconsExp = document.getElementsByTagName("i");
const sliderExp = document.querySelector(".slider-exp");
const titleExp = document.querySelector('.title-exp');
const ftr1 = document.querySelector('.link1');
const ftr2 = document.querySelector('.link2');
const ftr3 = document.querySelector('.link3');
const ftr4 = document.querySelector('.link4');

const firstRow = document.querySelector('#first-row');
const secondRow = document.querySelector('#second-row');

// new fullpage('#main', {
//     autoScrolling: true,
// })


const tl2 = new TimelineMax();
tl2.fromTo(jumbotronExp, 1.2, {width: "80%"}, {width: "80%", ease: Power3.easeInOut}).fromTo(sliderExp, 1.2, { y:"-100%"}, {y: "0%", ease: Power2.easeInOut}, "-=1").fromTo(titleExp, 0.7, {opacity: 0, y: -65}, {opacity: 1, y: -40}, "-=0.8").fromTo(nameExp, 0.5, {color: "black"}, {color: "white"}, "-=1.2").fromTo(navExp, 0.3, {color: "black"}, {color: "white"}, "-=1.75" ).fromTo(footerLinksExp, 0.3, {color: "white"}, {color: "black"}, "-=1.45").to(iconsExp, 1, {color: 'black'}, "-=1.45").fromTo(ftr1, 0.3, {color: "white"}, {color: "black"}, "-=1.45").fromTo(ftr2, 0.3, {color: "white"}, {color: "black"}, "-=1.45").fromTo(ftr3, 0.3, {color: "white"}, {color: "black"}, "-=1.45").fromTo(ftr4, 0.3, {color: "white"}, {color: "black"}, "-=1.45").fromTo(firstRow, 2, {opacity: 0, y: "-50"}, {opacity: 1, y: "0", ease: Power3.easeInOut}).fromTo(secondRow, 2, {opacity: 0, y: "-50"}, {opacity: 1, y: "0", ease: Power3.easeInOut})






// myID = document.getElementById("second-row");

// var myScrollFunc = function() {
//   var y = window.scrollY;
//   if (y >= 900) {
//     myID.className = "row show"
//   } else {
//     myID.className = "row hide"
//   }
// };

// window.addEventListener("scroll", myScrollFunc);

