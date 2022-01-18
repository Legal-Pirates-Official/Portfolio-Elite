const navbar = document.querySelector('.navbar');
const navbarright = document.querySelector('.navright');

document.querySelector('.header').addEventListener('click', function() {
    navbar.classList.add('active');
    navbarright.classList.add('active2');

})
document.querySelector('.closebtn').addEventListener('click', function() {
    navbar.classList.remove('active');
    navbarright.classList.remove('active2');

})

