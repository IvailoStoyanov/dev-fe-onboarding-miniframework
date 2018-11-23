
const toggleShutterBox = {

    getButtonsArray: document.querySelectorAll('.ctaSection__button'),
    allContactUsElementsArray: document.querySelectorAll('.ctaSection__shutterBox'),
    init: () => {
        toggleShutterBox.bindEventListeners();
    },

    bindEventListeners: function () {
        
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
        const elementBlockClassOpenModifier = 'ctaSection__shutterBox--opened';
        const ctaSectionSelector = '.ctaSection';



        self.allContactUsElementsArray.forEach(elem => {
            if (btn.closest(ctaSectionSelector).querySelector(elementBlockSelector) !== elem) {
                elem.classList.remove(elementBlockClassOpenModifier);
            }
        });

        btn.closest(ctaSectionSelector).querySelector(elementBlockSelector).classList.toggle(elementBlockClassOpenModifier);
    }
};

toggleShutterBox.init();   