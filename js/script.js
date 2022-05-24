(function ($) {
    $(function () {
        $('nav ul li > a:not(:only-child)').click(function (e) {
            $(this)
                .siblings('.navigation__dropdown')
                .slideToggle()
            $('.navigation__dropdown')
                .not($(this).siblings())
                .hide()
            e.stopPropagation()
        })
        $('html').click(function () {
            $('.navigation__dropdown').hide()
        })

        $('.calendar-container').calendar();
        //$('.calendar-wrapper').calendar();
    })
})(jQuery)