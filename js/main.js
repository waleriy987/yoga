$(document).ready(function () {
	$("#e0").select2();
	$(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
	$(".paymentBig").slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  fade: true,
		  asNavFor: '.paymentSmall'
      });
	$(".paymentSmall").slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  asNavFor: '.paymentBig',
		  centerMode: true,
		  focusOnSelect: true
      });
	$(window).scroll(function() {
		var headerFixed = $(window).scrollTop();
		if(headerFixed > 120){
			$(".header-container").addClass("fixedHeader");
		}else if(headerFixed < 120){
			$(".header-container").removeClass("fixedHeader");
		}
	});
	$(document).on("mouseover", ".payment_card_box__item-btn", function() {
		$(this).parent().siblings().children().css("color", "blue");
		$(this).css("background-color", "blue");
	});
	$(document).on("mouseout", ".payment_card_box__item-btn", function() {
		$(this).parent().siblings().children().css("color", "#fff");
		$(this).css("background-color", "#5b6ceb");
	});


	$(document).on("click", ".header__open-mobile-menu", function () {
		$(".mobail-menu-container").animate({left:"0%"}, 500);
    });

    $(document).on("click", ".mobail-menu__close", function () {
        $(".mobail-menu-container").animate({left:"-100%"}, 500);
    });

    function openMenu(){
    	$(".mobail-menu-container").css("display", "block");
    }

    function closeMenu(){
    	$(".mobail-menu-container").css("display", "none");
    }

    if($(window).width() < 768){
    	openMenu();
    }else if($(window).width() > 768){
    	closeMenu();
    }

    $(window).resize(function () {
    	if($(window).width() < 768){
	    	openMenu();
	    	$(".mobail-menu-container").css("left", "-100%");
	    }else if($(window).width() > 768){
	    	closeMenu();
	    }
    });

});

function validate() {
	var name_input = document.forms['forms_balance']['name_input'].value;
	var phone_input = document.forms['forms_balance']['phone_input'].value;
	if (name_input.length == 0) {
		alert("заполните обязательное поле")
		return false;
	}
	if (phone_input.length == 0) {
		alert("заполните обязательное поле")
		return false;
	}
}