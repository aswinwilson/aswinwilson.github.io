// On document ready
$(document).ready(function () {
    // Click event of every anchor tag inside main
    $('main a').prev().hide();
    $('main a').click(function (e) {
        e.preventDefault();
        // Ternary operator to check prev sibling has hide if yes change text
        $(e.currentTarget).prev().hasClass('hide') ? $(e.currentTarget).text("Show more") : $(e.currentTarget).text("Show less");
        //Easing using swing
        $(e.currentTarget).prev().hasClass('hide') ? $(e.currentTarget).prev().slideUp(1000, "swing") : $(e.currentTarget).prev().slideDown(1000, "swing");
        // Toggle class of prev element
        $(e.currentTarget).prev().toggleClass('hide');
    });
});