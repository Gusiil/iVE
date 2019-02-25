


// 左键点击动画
$(function(){
	var a_idx = 0;
	jQuery(document).ready(function($) {
	    $('body').click(function(e){   
			var font = ['F','A','N','G','J','I','E','S','O','N','G'];
	        var $i = $('<span/>').text(font[a_idx]); //新建span标签
			a_idx = (a_idx + 1) % font.length;
	        var x = e.pageX, y = e.pageY;//获取鼠标点击的坐标
	        $i.css({
	            'z-index':99999,
	            'top':y-20,
	            'left':x,
	            'position':'absolute',
	            'color':'#12A3EA',
				'font-weight':'700',
				'font-family':'hyllh'
	        });//给生成的span标签加上 样式
	        $('body').append($i);
	        $i.animate(
	            {'top':y-180,'opacity':0},
	            1500,
	            function(){
	            	$i.remove();
	            }
	        );//消失动画效果
	    });
	});
});
$('.show-box > h1,.show-box > h3,.show-box > p').addClass('animated fadeInUp');
$('.my-avatar,.headline,.flex-item,.say,.timeline,.contact-box').addClass('animated fadeIn');	
$('.my-avatar,.headline,.flex-item,.say,.timeline,.contact-box').attr('data-wow-duration','1s');	
$('.view-box').addClass('animated bounceInRight');
$('.moveup').addClass('animated fadeInUp');
var item = $('.flex-wrap > .flex-item');
for(var i=0;i<item.length;i++){
	item.eq(i).attr('data-wow-delay',(i / 10 )+'s');
}
