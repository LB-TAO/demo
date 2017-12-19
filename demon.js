$(function() {
	var $main = $("#main");
	var $select = $("#select");

	var lisArr = $("#select>li");
	var $one = $("#one");
	var imgWidth = $one.outerWidth();
	var $svn = $("#svn");
	var svnArr = $("#svn>div");
	var $date = $("#date");
	var $video = $("#video");
	var current = 0;
	var $new3 = $("#new3");
	var $media = $("#media");
	var $credulidy = $("#credulidy");
	var $media_credulidy =$("#media_credulidy");
	var $media_lisArr = $("#media_credulidy>li");
	var $footer_imgArr = $("#footer>li");
	lisArr.mouseenter(function(event) {
		$main.idx = $(this).index();
		$(this).css('background','pink').siblings().css("backgroundColor","yellow");
		current = $main.idx;
		$svn.css('left',-$main.idx*imgWidth);
		clearInterval(timer);
		timer =null;
	});
	lisArr.mouseleave(function() {
		clearInterval(timer);
		timer = time();
	});
	
	$date.hover(function() {
		$(this).css({
		backgroundImage:"url(imags/mun2.png)",
		backgroundRepeat: "no-repeat",
		backgroundSize:"200px 100px",
		backgroundPosition:"-6px -22px"
	})
	}, function() {
		$(this).css({
			backgroundImage:"url(imags/mun.png)",
			backgroundRepeat: "no-repeat",
			backgroundSize:"200px 100px",
			backgroundPosition:"-6px -22px"
		});
	});
	var $videoImg = $("<img />");
	var $video2 = $("#video2");
	var $delect = $("<div></div>");
	$video.click(function(event) {
		clearInterval(timer);
		timer = null;
		$videoImg.attr("src","imags/video2.png");
		$video2.css("display","block").attr("src","em.swf");
		$videoImg.css({
			width: '1200px',
			height: '800px',
			position:"absolute",
			zIndex:33
		});
		$video2.css({
			width: '408px',
			height: '223px',
			position:"absolute",
			top:"229px",
			left:"396px",
			zIndex:34
		});
		$delect.css({
			position:"absolute",
			width:"41px",
			height:"46px",
			top:"169px",
			left:"787px",
			zIndex:35
		});
		console.log($video2);
	});
	$main.append($videoImg);
	$main.append($delect);
	
	$delect.click(function(event) {
			timer = time();
			$videoImg.css({
				zIndex: -1
			});
			$video2.css("display",'none');
			$delect.css("zIndex","-3");
		});
		
		var timer = null;
		timer = time();
		function time(){
			return setInterval(function(){
				$svn.css('left',-current*imgWidth);
				if(current >=5){
					current = 0;
					$svn.css("left","0");
				}
				$(lisArr[current]).css("backgroundColor","pink").siblings().css("backgroundColor","yellow");
				current++;
			},1000);
		}

		$new3.on("click",function(event){
			$("#new3>img").css("display",'block');
			$media.find("*").css("display","none");
			event.stopPropagation();
		});
		
		$main.click(function(event){
			$("#new3>img").css("display","none");
			$media.find("*").css("display","none");
		});
		$media.on("click",function(enent){
			$("#media>img").css("display","block");
			$("#new3>img").css("display","none");
			$media_credulidy.css("display","block").find("li").css("display","block");
			$credulidy.css("display","block");
			event.stopPropagation();
		});
		$media_lisArr.mouseenter(function() {
			$(this).children().css("display","block").siblings().children().css("display","none");
		});
		$media_lisArr.hover(function() {
			$(this).children().css("display","block").siblings().children().css("display","none");
		}, function() {
			$(this).children().css("display","none");
		});
		$footer_imgArr.hover(function() {
			$(this).children().css("display","block");
		}, function() {
			$(this).children().css("display","none");
		});
		var $WeChat_left = $("#WeChat_left");
		var $WeChat_right = $("#WeChat_right");
		$WeChat_left.hover(function() {
			$WeChat_left.css("backgroundPosition","0px 0px");
		}, function() {
			$WeChat_left.css("backgroundPosition","0px -14px");
		});
		$WeChat_right.hover(function() {
			$WeChat_right.css("backgroundPosition","0px 0px")
		}, function() {
			$WeChat_right.css("backgroundPosition","0px -14px");
		});

		var $CutRight = $("#CutRight");
		var $CutLeft = $("#CutLeft");
		$CutRight.hover(function() {
			current -= 1;
			if(current<=0){
				current = 0;
			}
			clearInterval(timer);
			$CutRight.css("backgroundPosition","20px 12px");
		}, function() {
			clearInterval(timer);
			timer = time();
			$CutRight.css("backgroundPosition","20px -20px");
		});
		$CutLeft.hover(function() {
			current -= 1;
			if(current<=0){
				current = 0;
			}
			clearInterval(timer);
			$CutLeft.css("backgroundPosition","22px 12px");
		}, function() {
			clearInterval(timer);
			timer = time();
			$CutLeft.css("backgroundPosition","22px 44px");
		});
		$CutRight.click(function(){
				current--;
				if(current<=0){
					current = 0;
				}
				console.log(current);
				$svn.css('left',-current*imgWidth);
		});
		$CutLeft.click(function(){
			current++;
			if(current>=4){
				current = 4;
			}
			console.log(current);
			$svn.css('left',-current*imgWidth);
		});
		$("#two_video").hover(function() {
			$("#two_button").css("display","block");
		}, function() {
			$("#two_button").css("display","none");
		});
		$("#two_date_hover").hover(function() {
			$("#two_date_hover").css("backgroundPosition","0px 0px");
		}, function() {
			$("#two_date_hover").css("backgroundPosition","0px -56px");
		});
}); 