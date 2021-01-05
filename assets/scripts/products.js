$(document).ready(function () {
    // Build the URL based on the search term
    var url = "https://aswinwilson.github.io/ProjectSemesterTwo/assets/json/products.json";

    $.getJSON(url, function (data) {
        var html = "";
        $.each(data.results, function (i, item) {
            shippingText = item.priceIncludesShipping ? 'Free Shipping' : 'Shipping Extra';
            html += '<div class="col-md-4"><div class="productCard"><h3 class="title">' + item.displayName + "</h3>";
            html += '<div class="cardImageWrapper"><img src=' + item.imageUrl + '>';
            html += '<div class="rating">Rating ' + item.averageRating + '/5</div>';
            html += '<div class="shipping">' + shippingText + '</div></div>';
            html += '<div class="model">Model Number: ' + item.sku + '</div>';
            html += '<div class="price">Price: ' + item.pricing.listPriceWithCurrency + '</div></div></div>';
        });
        $("#products").html(html);
    });
});