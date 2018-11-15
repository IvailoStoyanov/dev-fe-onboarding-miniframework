// using jQuery

$('.contactUs').hide()
$('.button').click(function () {
    const elementBlockSelector = '.contactUs';
    const ctaSection = '.ctaSection';

    $(this).closest(ctaSection).find(elementBlockSelector).slideToggle('slow');
    console.log($(elementBlockSelector).not($(this).closest(ctaSection).find(elementBlockSelector)));

    $(elementBlockSelector).not($(this).closest(ctaSection).find(elementBlockSelector)).slideUp('slow');

});