
$(".box").mousemove(function(e){
		var x = e.clientX;
		var y = e.clientY;
		var left = x-25-$(this).offset().left;
		var top = y-25-$(this).offset().top;
		console.log($(this).offset().left)
		if(left<0){
			left=0
		}
		if(left>150){
			left=150
		}
		if(top<0){
			top=0
		}
		if(top>150){
			top=150
		}
		$(".little").css({left:left+"px",top:top+"px"});
		$(".big img").css({left:-4*left+"px",top:-4*top+"px"})
})
$(".box").mouseenter(function(){
	$(".big,.little").show()
})
$(".box").mouseleave(function(){
	$(".little,.big").hide()
})

