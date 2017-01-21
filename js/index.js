//页签效果
var $tabbtn = $(".tab-button");
for(var i = 0; i < $tabbtn.length; i++){
	$($tabbtn[i]).mytab();
}

//轮播效果
$(document).ready(function(){
	var $wrap = $(".focus-wrap");
	$($wrap[0]).myWrap();
})

//官方微信
$(document).ready(function(){
	// $(".weixinbutton").on("click",function(){
	// 	$(this).next(".weixinpic").slideToggle("slow");
	// })
	var timeout;	
	$(".weixinbutton").on("mouseover",function(){
        var that = this;
		timeout = setTimeout(jsq,200);
		function jsq(){
			$(that).next().slideDown("slow");
		}
				
	})
	$(".weixinbutton").on("mouseout",function(){
		$(this).next().slideUp("slow");
		clearTimeout(timeout);
	})
})

//返回顶部
$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$('#back-top').fadeIn()
		}
		else{
			$('#back-top').fadeOut();
		}
	});
	$('#back-top').click(function(){
		$("body").animate({ scrollTop: 0 });
	});
});

//星级评价
$(".starslt").on("click","i",function(){
	// if($(this).hasClass("act")){
	// 	$(this).nextAll().removeClass("act");
	// }
	// else{
	// 	$(this).prevAll().addClass("act");
	// 	$(this).addClass("act");
	// }
	
	$(this).addClass("act").prevAll().addClass("act");
	$(this).nextAll().removeClass("act");
})

// $(document).ready(function(){
// 	$(".starslt").on("click","i",function(){
		
// 		var that = this;
// 		var arrStar = $(".starslt i");
// 		var index = $(".starslt i").index(that) + 1;
// 		if($(arrStar[index]).hasClass("act")){
// 			$(arrStar[(index-1)]).nextAll().removeClass("act")
// 		}
// 		else{
// 			for(var i = 0; i < index;i++){
// 				$(arrStar[i]).addClass("act");
// 			}
// 		}
			
// 	})
// })

//下拉菜单
$(document).ready(function(){
	
		var firstLevel = ["HTML5","CSS3","Javescript","Jquery","Ajax"];
		var first_str = "";
		for(var i = 0; i < firstLevel.length; i++){
			first_str = first_str + "<li value="+i+">"+"<a href='#'>"+firstLevel[i]+"</a>"+"</li>";
		}
		$(".xiala ul").append(first_str);
	
	$(".xiala").on("mouseover",function(){
		$(".xiala ul").show();
		$(".xiala").css({background:"#fff",color:"#000"})
	})
	$(".xiala").on("mouseout",function(){
		$(".xiala ul").hide();
		$(".xiala").css({background:"#F30",color:"#fff"})
	})
		
})

//背景颜色改变
$(document).ready(function(){
	// var a_cont = $('.gjz').children()
	// for(var i = 0; i < a_cont.length; i++){
	// 	$(a_cont[i]).attr('class','bg'+(Math.ceil(Math.random()*8)))
	// }
	
	$(".gjz a").each(function(index,element){
		$(this).addClass("bg"+(Math.ceil(Math.random()*8)))
	})
})

//登录效果
$(document).ready(function(){

	$(".login-but").on('click',function(){
		$(".markall").show();
		$(".markall").height(document.body.scrollHeight);
		$(".pop").toggle();
	})
	$(".popclose").on("click",function(){
		$(".markall").hide();
		$(".pop").hide();
	})
	$("#myform").on("submit",function(e){
		var username = $(".username").val();
		var password = $(".password").val();

		$.ajax({
			url:"http://www.hulupiao.com/index.php?r=api/login",
			type:"get",
			data:{"user_name":username, "password":password},
			jsonp:"callback",
			dataType:"jsonp",
			success:function(o){
				if(o.success == 1){
					$(".yincang").text("恭喜你，登录成功！")
				}
				else{
					$(".yincang").text("登录失败！")
				}
			}
		})
		return false;
	})
})


