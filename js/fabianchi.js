$(document).ready(function(){
	$(".dropdown-button").dropdown();
	$('.carousel.carousel-slider').carousel({full_width: true});
	carouselAutoplay()   
	//$('.parallax').parallax();

	Materialize.scrollFire(sfOptions);

	//Initialitation of Fullpage js
	//$('#fullpage').fullpage();
});



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
  suffix : '' 
};
var projects = new CountUp("proyectos", 0, 8, 0, 5, options);
var hours = new CountUp("horas", 0, 350, 0, 5, options);
var code = new CountUp("codigo", 0, 8500, 0, 7, options);
var years = new CountUp("años", 0, 1.5, 1, 5, options);


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
  ];
 