$(function(){
	//页面宽度
	var w = document.body.clientWidth;
			
	if(w<=1024){
		w = 1280;
	}
	$(".warp").width(w);
	$(".second_swap").width(w);
	$(".third_swap").width(w);
});