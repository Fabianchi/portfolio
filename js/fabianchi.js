$(document).ready(function(){
	$(".dropdown-button").dropdown();
	$('.carousel.carousel-slider').carousel({full_width: true});
	carouselAutoplay()   
	//$('.parallax').parallax();

	Materialize.scrollFire(sfOptions);

	//Initialitation of Fullpage js
	//$('#fullpage').fullpage();
});

/*$(document).on('ready', function(){
	var btn = $('#btn-registrarse');
	var btnJsonStyle = {'background-color':'#2F2C6D', 'color':'#dedede'}
	var claseObtenida = $(btn).attr('class');
	alert(claseObtenida);

	if($(btn).has('class', 'teal') ){
		$(btn).removeClass('teal', 'darken-4');
		$(btn).css(btnJsonStyle);
	};	

	$(btn).text('Registro');
});*/


function carouselAutoplay() {
    $('.carousel').carousel('next');
    setTimeout(carouselAutoplay, 5000);
}


//Contador--------------------------------------------
var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '',
};
var projects = new CountUp("proyectos", 0, 8, 0, 6, options);
var hours = new CountUp("horas", 0, 350, 0, 6, options);
var code = new CountUp("codigo", 0, 8500, 0, 7, options);
var years = new CountUp("años", 0, 1.5, 1, 6, options);


//Scroll fire-----------------------------------------
var sfOptions = [
    {selector: '.S2', offset: 20, callback: function()
    	{
    	projects.start();
    	hours.start();
		code.start();
		years.start();
    	} 
	}
/*
	,
	{selector: '.about', offset:20, callback: function()
		{
			$('.about').addClass("slideExpandUp");
		}
	},
	{selector: '.experience', offset:20, callback: function()
		{
			$('.experience').addClass("slideExpandUp");
		}
	}
	*/
  ];