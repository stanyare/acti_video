$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	setTimeout(function() {
		$('body').removeClass('loaded'); 
	}, 1000);
	
});
$(function(){

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	var width_window = $(window).width();
	var height_window = $(window).height();
	$('.pulsar').css({'width':height_window, 'margin-left':(width_window-height_window)/2});
	

});

var handler2 = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.slide').css({'padding-bottom':height_footer+40, 'padding-top':height_header+32});
	
	var width_window = $(window).width();
	var height_window = $(window).height();
	$('.pulsar').css({'width':height_window, 'margin-left':(width_window-height_window)/2});
	
}
$(window).bind('load', handler2);
$(window).bind('resize', handler2);



