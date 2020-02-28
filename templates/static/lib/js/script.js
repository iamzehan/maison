$(window).scroll(function(){

  var scrollto = $(window).scrollTop();

  //back top btn

  if(scrollto> 200){
      $('.backto-top').fadeIn(1000);   
  }else{
      $('.backto-top').fadeOut(1000); 
  }



})





$('.backto-top').click(function(){
  $('html, body').animate({
      scrollTop: 0                    
  },500)
})


// User slider
$('.feature_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});