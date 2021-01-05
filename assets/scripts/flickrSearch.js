$(document).ready(function () {
    var searchTerm;
    $("#btnSearch").click(function () {
        // Set the search term
        searchTerm = "";
        if ($("#search").val() == "") { alert("You must enter one or more tags!"); }
        else {
            searchTerm = $("#search").val();
            // Build the URL based on the search term
            var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
                "format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";

            $.getJSON(url, function (data) {
                var html = "";
                $.each(data.items, function (i, item) {
                    html += '<div class="col-md-4"><div class=" flickrCard"><h2 class="title">' + item.title + "</h2>";
                    html += '<div class="cardImageWrapper"><img src=' + item.media.m + '></div>';
                    html += '<p class="imageTags"><b>Tags: </b>' + item.tags + '</p></div></div>';
                });
                $("#flickrCards").html(html);
            });
        }
    });
});