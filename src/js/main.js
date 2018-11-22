
const toggleShutterBox = {

    getButtonsArray: document.querySelectorAll('.ctaSection__button'),
    allContactUsElementsArray: document.querySelectorAll('.ctaSection__shutterBox'),
    init: () => {
        toggleShutterBox.bindEventListeners();
    },

    bindEventListeners: function () {
        console.log(this);
        
        const self = this;
        self.getButtonsArray.forEach(elem => {
            elem.addEventListener('click', function (event) {
                self.openInfobox(event);
            });
        });
    },

    openInfobox: function (event) {
        const self = this;
        const btn = event.target;
        const elementBlockSelector = '.ctaSection__shutterBox';
        const elementBlockClass = 'ctaSection__shutterBox';
        const openModifier = '--opened';
        const ctaSectionSelector = '.ctaSection';


        self.allContactUsElementsArray.forEach(elem => {
            if (btn.closest(ctaSectionSelector).querySelector(elementBlockSelector) !== elem) {
                elem.classList.remove(elementBlockClass + openModifier);
            }
        });

        btn.closest(ctaSectionSelector).querySelector(elementBlockSelector).classList.toggle(elementBlockClass + openModifier);
    }
};

toggleShutterBox.init();