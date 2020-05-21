'use strict';

var scroller = {
	config: {
		hoverColor: "#DB7661",
		bgColor: "#1f2b31",
		opacity: 1
	},
	init: function(){
		var anchor = document.createElement("a");
		var scrollTopButton = ".scroll-top-button";
		var spn = document.createElement("img");
		$(spn).text("^");
		$(anchor).attr({
			href: "#top"
		});
		$(spn).attr({
			id: "up-btn",
			class: scrollTopButton.replace(".",""),
			src: "https://www.pinpng.com/pngs/m/12-127184_up-white-arrow-back-to-top-arrow-png.png",
		});
		var bgCol, hoverCol, arrowCol, op;
		if(typeof  conf != "undefined") {
			bgCol = typeof conf.bgColor == "undefined" ? scroller.config.bgColor : conf.bgColor;
			hoverCol = typeof conf.hoverColor == "undefined" ? scroller.config.hoverColor : conf.hoverColor;
			op = typeof conf.opacity == "undefined" ? scroller.config.opacity : conf.opacity;
		} else {
			bgCol =  scroller.config.bgColor;
			hoverCol = scroller.config.hoverColor;
			op = scroller.config.opacity;
		}
		$(anchor).append(spn);
		$("body").prepend(anchor);
		$(anchor).prepend("<a name='top'></a>");
		$(scrollTopButton).css({
			position: "absolute",
			top: "120px",
			right: "40px",
			 
			textAlign: "center",
			boxSizing: "content-box",
			width:"35px"


		});

		$(scrollTopButton).on("mouseover", function(){
			$(this).css({
				backgroundColor: hoverCol,
				opacity: 1
			});
		});
		$(scrollTopButton).on("mouseout", function(){
			$(this).css({
				color: arrowCol,
				backgroundColor: bgCol,
				opacity: op
			});
		});
		this.offset();
	},
	offset: function(){
		var currentWindowHeight = window.innerHeight;

		var arrow = $(".scroll-top-button");

		arrow.css("display", "none");

		$(function() {
			var eTop = $('body').offset().top;

			var arrowOffset = arrow.offset().top;

			//position of the ele w.r.t window
			$(window).scroll(function() {
				//when window is scrolled
				var scrollPosition = eTop - $(window).scrollTop();
				if (scrollPosition > -200) {
					arrow.fadeOut("slow");
				}
				if (scrollPosition <= -400) {
					var height = (window.innerHeight - 100);
					arrow.fadeIn("slow");
					arrow.css({
						'position': 'fixed',
						'display': 'block',
						'top': height,
						'z-index': 2
					});
				}
			});
		});
		this.scrolls();
	}

};

$(function(){
	scroller.scrolls();


});
