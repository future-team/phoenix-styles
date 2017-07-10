(function(){
	$('.main-nav li').click(function(event){
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
	})

	$(document).scroll(function(event){
		var sections = $('.main section'),
			navs = $('.main-nav li'),
			scrollTop = parseInt($(document).scrollTop());
		
		for(var i=0; i< sections.length; i++){
			if(scrollTop >= sections.eq(i).offset().top - 100 && scrollTop < sections.eq(i+1).offset().top){
				var id = sections.eq(i).attr('id')
				// if(!navs.eq(i).hasClass('active')) 
					$('.main-nav li').removeClass('active')
					$('.main-nav li[data-href='+id+']').addClass('active');
			}
		}		
	})
})()