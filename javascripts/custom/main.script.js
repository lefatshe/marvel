
// Enable toggle panels
var togglePanels = function(){
	$(".toggle-title").click(function () {
		$(this).next(".toggle-details").toggle("fast");
	});
}
// Stick menu item to top
var stickMenu = function() {
	var menu = $('.menu');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.menu').addClass('sticky');
            $('#Content').addClass('menu-padding');
        } else {
            $('.menu').removeClass('sticky');
            $('#Content').removeClass('menu-padding');
        }


    }

    document.onscroll = scroll;
}
// Ensure HTML placeholder tag compatible with IE
var placeHolder = function() {
	(function ($) {
         $.support.placeholder = ('placeholder' in document.createElement('input'));
     })(jQuery);


     //fix for IE7 and IE8
     $(function () {
         if (!$.support.placeholder) {
             $("[placeholder]").focus(function () {
                 if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
             }).blur(function () {
                 if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
             }).blur();

             $("[placeholder]").parents("form").submit(function () {
                 $(this).find('[placeholder]').each(function() {
                     if ($(this).val() == $(this).attr("placeholder")) {
                         $(this).val("");
                     }
                 });
             });
         }
     });
}

// ***************************************************************
// Dom Ready
// ***************************************************************

jQuery( document ).ready(function() {
    togglePanels();
    stickMenu();
    placeHolder();
});
