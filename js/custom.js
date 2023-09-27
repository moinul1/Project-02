
//*** owl carousel slider
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});


$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



//*** Scroll Reavel Effect
 
 var sr=ScrollReveal();

 sr.reveal('.header_left',{

 	origin: 'left',
 	distance: '250px',
 	duration: 2000,
 	easing: 'ease-in'

 });

// *** Social icon
 sr.reveal('.fa-facebook-f',{
 	origin: 'top',
 	distance: '150px',
 	duration: 2000
 });

  sr.reveal('.fa-twitter',{
 	origin: 'top',
 	distance: '150px',
 	duration: 3000
 });

 sr.reveal('.fa-google-plus-g',{
 	origin: 'top',
 	distance: '150px',
 	duration: 4000
 });

 sr.reveal('.fa-pinterest-p',{
 	origin: 'top',
 	distance: '150px',
 	duration: 5000
 });

 sr.reveal('.fa-behance',{
 	origin: 'top',
 	distance: '150px',
 	duration: 6000
 });

 sr.reveal('.fa-dribbble',{
 	origin: 'top',
 	distance: '150px',
 	duration: 7000
 });

 // *** Main nav
 sr.reveal('#main_nav',{
 	delay: 1000,
 	duration: 1500
 });



// *** Slider
 sr.reveal('.carousel-caption',{
 	delay: 1500,
 	duration: 1500
 });

 sr.reveal('.slider_heding',{
 	origin: 'left',
 	distance: '250px',
 	duration: 4000
 });

 sr.reveal('.slider_p',{
 	origin: 'right',
 	distance: '250px',
 	duration: 4000
 });

 sr.reveal('.slider_btn',{
 	origin: 'bottom',
 	distance: '250px',
 	duration: 4000
 });


 // *** Service


  sr.reveal('.service_post',{
 	origin: 'bottom',
 	distance: '250px',
 	duration: 3000
 });


