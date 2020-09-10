const formSubmit = document.querySelector('.contact-form');
const formInputs = document.querySelectorAll('.form-control');

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    formInputs.forEach(input => input.value = '');
    $('.toast').toast('show')
})



class TypeWriter{
    constructor(txtElement, words, wait=3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait,10);
        this.type();
        this.isDeleting = false;
    }
    type(){
        const current = this.wordIndex % this.words.length;

        const fullTxt = this.words[current];

        if(this.isDeleting){
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else{
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

        let typeSpeed = 300;

        if(this.isDeleting){
            typeSpeed /= 2;
        }

        if(!this.isDeleting && this.txt === fullTxt){
            typeSpeed = this.wait;

            this.isDeleting = true
        }
        else if(this.isDeleting && this.txt === ''){
            
            this.isDeleting = false;

            this.wordIndex++;

            typeSpeed = 500
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-word'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait)
}

const menuBtn = document.querySelector('.menuBtn');

const navBar = document.querySelector('.nav');

// const showNav = new TimelineMax({ paused: true });

// const hideNav = new TimelineMax({ paused: true });

menuBtn.addEventListener('click', () => {
    
    if (navBar.classList.contains('active') !== true) {
        gsap.fromTo(".nav", { x: -350, opacity: 0 }, { x: 0, opacity: 1, duration: 2.5, ease: "back.out", repeat: 0, repeatDelay: 1 });
        navBar.classList.add('active');
    }
    else if (navBar.classList.contains('active')) {
        gsap.fromTo(".nav", { x: 0, opacity: 1 }, { x: -350, opacity: 0, duration: 2.5, ease: "back.out", repeat: 0, repeatDelay: 1 });
        navBar.classList.remove('active');
    }


const scroll = new SmoothScroll('.nav ul li a[href*="#"]', {
    speed: 400,
    easing: 'easeInOutCubic' 
})



// function onScroll(event) {
//     const Links = document.querySelectorAll('.nav-link');
//     const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

//     for (let i = 0; i < Links.length-1; i++) {
//         const currLink = Links[i];
//         const val = currLink.getAttribute('href');
//         const refElement = document.querySelector(val);
//         if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
//             document.querySelector('nav ul li a').classList.remove('active');
//             currLink.classList.add('active');
//         } else {
//             currLink.classList.remove('active');
//         }
//     }
// };

// window.document.addEventListener('scroll', onScroll);