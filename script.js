let menu = document.querySelector('.burger-menu')
let button = document.querySelector('.burger-menu_button', '.burger-menu_lines');
let links = document.querySelector('.burger-menu_link');
let overlay = document.querySelector('.burger-menu_overlay');
  
button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
});
  
links.addEventListener('click', () => toggleMenu());
overlay.addEventListener('click', () => toggleMenu());
  
toggleMenu = () => {
    if (menu.classList.contains(('burger-menu_active'))){
        menu.classList.remove('burger-menu_active'); 
    }
    else {
        menu.classList.add('burger-menu_active');   
    }
}


const elementsToAnimate = document.querySelectorAll('.js-animate');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

elementsToAnimate.forEach(element => {
  observer.observe(element);
});