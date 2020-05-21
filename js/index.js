const jumbotron = document.querySelector(".jumbotron");
const slider = document.querySelector(".slider");
const name = document.querySelector(".col-sm-6");
const headline = document.querySelector(".col-md-8");
const nav = document.getElementsByTagName("a");
const footerLinks = document.getElementById("footer-row");



const tl = new TimelineMax();
tl.fromTo(jumbotron, 1.2, {width: "100%"}, {width: "80%", ease: Power3.easeInOut}).fromTo(slider, 1.7, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut},"-= 0.5").fromTo(headline, 1.5, {opacity: 0, x: -150}, {opacity: 1, x: -50}, "-=1.22").fromTo(name, 0.3, {color: "black"}, {color: "white"}, "-=1.45").fromTo(nav, 0.3, {color: "black"}, {color: "white"}, "-=1" ).fromTo(footerLinks, 0.3, {color: "black"}, {color: "gray"}, "-=1.45");

