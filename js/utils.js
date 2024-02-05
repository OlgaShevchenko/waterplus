$(document).ready(function(){    	
	$('.menu__trigger').click(function () {
		$('.submenu').slideToggle('slow');	
		$('.submenu').toggleClass('slow');
	});	
   	$('a[href*="#"]').click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);		
	});
	
	$('#horiz_container_outer').horizontalScroll();

	$(document).click(function (e){ 
		var div = $(".menu__trigger"); 		
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) { 							
			$(".submenu").slideUp();
			
		}				
	});	

});
