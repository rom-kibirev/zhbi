jQuery().noConflict

$(document).resize(function(e) {
    var wh_carusel = $(window).width();
if (wh_carusel<1280) {
	$('.carousel-inner .item').each(function(i, e) {
        var ci_img = $(this).find('img').attr('src');
		$(this).css('background-image','url('+ci_img+')');
		$(this).find('img').hide();
    });;
}else{
	$(this).find('img').show();
}
});

$(document).ready(function() {
	
/*heaer*/
$(window).scroll(function(){
	var headerscroll = $('.header').next().offset().top;
	if($(window).scrollTop() > headerscroll){
		$('.header').addClass('scrolled');
	}else {
		$('.header').removeClass('scrolled');
	}
});
$(document).ready(function(){
	$('.h_span').click(function(){
		$(this).toggleClass('open');
		$('.tm_but').toggleClass('tm_but_open');
		$('.mainmenu').toggleClass('mainmenu_open');
	});
});


/*main slider*/
$(".carousel-inner").swipe( {
	swipeLeft:function(event, direction, distance, duration, fingerCount) {
		$(this).parent().carousel('next');
	}, swipeRight: function() {
		$(this).parent().carousel('prev');
	},threshold:0
});
var wh_carusel = $(window).width();
if (wh_carusel<1280) {
	$('.carousel-inner .item').each(function(i, e) {
        var ci_img = $(this).find('img').attr('src');
		$(this).css('background-image','url('+ci_img+')');
		$(this).find('img').hide();
    });;
}else{
	$(this).find('img').show();
}
	
/*catalog filter*/
$(window).scroll(function(){
	var navposition = $('.catalog .c_title').offset().top;
	var navHeightlast = $('.catalog').next().offset().top;
	if($(window).scrollTop() > navposition-200){
		$('.catalog_filter').addClass('cf_scrolled');
		if($(window).scrollTop() > navHeightlast){
			$('.catalog_filter').removeClass('cf_scrolled');		
		}else {
			$('.catalog_filter').addClass('cf_scrolled');
		}
	}else {
		$('.catalog_filter').removeClass('cf_scrolled');
	}
});
$('.catalog_filter .cf_selector').click(function(){
	var num_group = $(this).attr('data-catgroup');
	$('.catalog_filter .cf_selector').removeClass('selected');
	$(this).addClass('selected');
	if (num_group>0) {
		$('.c_list .c_item').addClass('c_item_filtered');
		$('.c_list .c_item').filter('[data-catitem*='+num_group+']').removeClass('c_item_filtered');
		var ansc = $('.catalog .c_title').offset().top-150;
		$("html, body").animate({ scrollTop: ansc+'px' },1000);
	} else {
		$('.c_list .c_item').show(200).removeClass('c_item_filtered');
		$(this).removeClass('selected');
	}
});


});