const header = document.querySelector("header");

window.addEventListener("scroll" , function(){
header.classList.toggle("sticky" ,window.scrollY > 80);


});


const navbar = document.querySelector('.navbar');
const menu = document.querySelector('#menu-icon');

menu.onclick = function(){
menu.classList.toggle('bx-x');
navbar.classList.toggle('open');


};
