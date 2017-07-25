(function(){
	$('.main-nav li').click(function(event){
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
	})

	$(document).scroll(function(event){
		var sections = $('.main section'),
			navs = $('.main-nav li'),
			scrollTop = parseInt($(document).scrollTop()),
			thisTop, nextTop,
			clientHeight = document.documentElement.clientHeight

		for(var i=0; i< sections.length; i++){
			thisTop = sections.eq(i).offset().top
			nextTop = sections.eq(i+1).offset()? sections.eq(i+1).offset().top : thisTop+sections.eq(i).offset().height

			if(scrollTop >= thisTop - clientHeight+100 && scrollTop < nextTop){
				var id = sections.eq(i).attr('id')
				// if(!navs.eq(i).hasClass('active')) 
					$('.main-nav li').removeClass('active')
					$('.main-nav li[data-href='+id+']').addClass('active');
			}
		}		
	})
})()