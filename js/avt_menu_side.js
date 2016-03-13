/* Select active menu on click */
$("nav li").click(function ( e ) {
	//alert($("nav li a.active").prop("id"));
	
    e.preventDefault();
    $("nav li a.active").removeClass("active"); //Remove any "active" class  
    $("a", this).addClass("active"); //Add "active" class to selected tab  

    document.querySelector(".section").style.display = "none";    /* hide all visible class sections*/
    document.querySelector("#sec_"+($(this).prop("id"))).style.display = "block"; /* show active sections*/
    
    // $(activeTab).show(); //Fade in the active content  
});
$(function() {
	$('#top_left').hide();
	$('#left_side, #top_left').hover(function() {
		$('#top_left').stop().fadeIn();
	    //$('#top_left').toggle('slide',  { direction: right }, 50);
	    //$('#top_left').show().stop().animate({ 'width': '300px' }, 1000);
		$('#left_side').hide();
	}, function(){
		$('#top_left').stop().fadeOut();
	    //$('#top_left').toggle('slide',  { direction: left }, 1500);
	    //$('#top_left').stop().animate({ 'width': '0px' }, 1000).fadeOut();
	    $('#left_side').show();
	});
});
$(".section-close").click(function ( e ) {
	$('.section').hide();
});