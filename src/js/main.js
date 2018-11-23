// using jQuery

$('.ctaSection__button').click(function () {
    const elementBlockSelector = '.ctaSection__shutterBox';
    const ctaSection = '.ctaSection';

    $(this).closest(ctaSection).find(elementBlockSelector).slideToggle('slow');
    $(elementBlockSelector).not($(this).closest(ctaSection).find(elementBlockSelector)).slideUp('slow');

});