$(document).ready(function () {
	$("#e0").select2();

	$(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
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

		var a = phone_input.indexOf("+");
		var b = phone_input.indexOf("0");
		var c = phone_input.indexOf("-");

		if (a<1 || b<1 || c<0) {
			alert("вы  ввели не существующий номер");
			return false;
		}
	}