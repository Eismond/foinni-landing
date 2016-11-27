$(function(){
 $(window).scroll(function() { 
  var top = $(document).scrollTop();
  var bh = $('header').height() - 120;
  var main = $('section.two').height + 120;
     
  if (top > 0) {
      $('.floating').addClass('fixed'); //200 - это значение высоты прокрутки страницы для добавления класс
  }  else {
     $('.floating').removeClass('fixed'); 
  }
 });
    
    $(".floating a").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').stop().animate({scrollTop: top}, 1500);
	});
});
$(window).scroll(function(){
	var scr=$(window).scrollTop();
	$('section').each(function(){
		if($(this).offset().top<scr+(150)){
			$('a[href="#'+$(this).attr('id')+'"]').parents('li').addClass('active').siblings('li').removeClass('active')
		}
	});

});
 
                  
