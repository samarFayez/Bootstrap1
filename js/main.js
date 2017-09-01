/*global $, jQuery, alert*/

$(function () {
	
   "use strict";

   var navbar = $('.navbar');

   $(window).scroll(function () {

      if ($(window).scrollTop() >= navbar.height()) {

		       navbar.addClass('scrolled navbar-fixed-top');

       } else {

               navbar.removeClass('scrolled');
      }
   });

   // Tabs

   $('ul.tabs li').click(function () {

		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});