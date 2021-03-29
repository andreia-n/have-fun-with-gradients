const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

const navLogo = document.querySelector('#navbar-logo');

//SHOW MOBILE MENU
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);


//show active menu on scroll

const highlightMenu = () => {

    const element = document.querySelector('.highlight');

    const home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const services = document.querySelector('#services-page');

    let scrollPos = window.scrollY;
    if(window.innerWidth > 960 && scrollPos < 600){
        home.classList.add('highlight');
        about.classList.remove('higlight');
        return;
    }

    else if(window.innerWidth > 960 && scrollPos < 1400){
        about.classList.add('highlight');
        home.classList.remove('highlight');
        services.classList.remove('highlight');
        return;
    }

    else if(window.innerWidth > 960 && scrollPos < 2345){
        services.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    }

    if((element && window.innerWidth < 960 && scrollPos < 600) || element){
        element.classList.remove('highlight');
    }
}


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//Close mobile menu on clickk

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 & menuBars){
        menu.classList.toggle('.is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);