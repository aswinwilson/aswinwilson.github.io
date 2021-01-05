$(document).ready(function () {
    // Click event for each of the anchor tags inside the li under parent with id image_list
    $('.imagesWrapper').click(function (e) {
        // Setting the caption from the current target first element, title
        $('.galleryWrapper img').attr('src', $(e.currentTarget).find('img').attr('src'));
        // Setting the image src from the current target first element, href
        $('#image').attr('src', $(e.currentTarget)[0].href);
    });
});