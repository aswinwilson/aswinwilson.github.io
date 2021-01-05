(function ($) {
    $.fn.highlightMenu = function (options) {
        var defaults = $.extend({
            'bgColor': 'transparent',
            'color': '#666666',
            'hoverBgColor': '#f8f3f3',
            'hoverColor': '#000000',
            'borderRadius': '20px',
            'fontWeight': '500'
        }, options);
        return this.each(function () {
            var items = $("li a");
            var o = defaults;
            items.css('text-decoration', 'none');
            items.mouseover(function () {
                $(this).css('background-color', o.hoverBgColor)
                    .css('color', o.hoverColor)
                    .css('border-radius', o.borderRadius)
                    .css('font-weight', o.fontWeight);
            });
            items.mouseout(function () {
                $(this).css('background-color', o.bgColor)
                    .css('color', o.color);
            });
        });
    }
})(jQuery);