// using only ES6


const buttons = document.querySelectorAll('button');
buttons.forEach(btnClick => btnClick.addEventListener('click', openInfobox));

function openInfobox(event) {
    const btn = event.target;
    const elementBlockSelector = 'contactUs';
    const open = '--opened';
    const allContactUs = document.querySelectorAll('.contactUs');
    const ctaSection = '.ctaSection';

    allContactUs.forEach(function(element) {
        if (btn.closest(ctaSection).querySelector('.contactUs') !== element) {
            element.classList.remove(elementBlockSelector + open);    
        };
    });
    
    btn.closest(ctaSection).querySelector('.contactUs').classList.toggle(`${elementBlockSelector}${open}`);
};