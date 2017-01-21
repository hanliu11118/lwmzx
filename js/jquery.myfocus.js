;(function($){
	var pluginName = "myWrap",
		defaults = {

		};
	$.fn[pluginName] = function(options){
		var settings = $.extend({},defaults,options);

		var that = this;
		var $tupian = $(that).children().first().children();
		var $num = $(that).children().last().children();
		var oldindex = 0;
		var timmer = setInterval(autoplay,3000);

		var mouseoverTime = null;

		//经过图片没有暂停，经过按钮有暂停
		$(that).children().last().on("mouseover","li",showTab);
		$(that).children().last().on("mouseout","li",outTab);

		//经过图片、按钮都有暂停
		//$(that).last().on("mouseover","li",showTab);
		//$(that).last().on("mouseout","li",outTab);
		
				
		function showTab(e){
			var that = this;					
			clearInterval(timmer);
			mouseoverTime = setTimeout(function(){
				showChg($(that).index(),oldindex);
			},400)
			
		}
		function outTab(e){
			timmer = setInterval(autoplay,3000);
			clearTimeout(mouseoverTime);//清除自动计时			
		}

		function autoplay(){
			var newindex;
			if(oldindex < $tupian.length - 1){
				newindex = oldindex + 1;
			}
			else{
				newindex = 0;
			}
			showChg(newindex,oldindex);
		}
		function showChg(now,old){
			if(now != old){
				$($tupian[old]).fadeOut(200);						
				$($tupian[now]).fadeIn(200);				

				$($num[old]).removeClass("act");
				$($num[now]).addClass("act");

				oldindex = now;
			}
		}
	}
})(jQuery);

