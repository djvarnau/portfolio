if ($('#widthChecker').css("display") == "none") {
  $('.thumbnail').mouseenter(function(){
    var $overlay = $(this).children(".overlay");
    $overlay.fadeIn();
  });

  $('.thumbnail').mouseleave(function(){
    var $overlay = $(this).children(".overlay");
    $overlay.fadeOut();
  });
};

$(".scroll").click(function(event){
  event.preventDefault();
  //calculate destination place
  var dest=0;
  if($(this.hash).offset().top > $(document).height()-$(window).height()){
      dest=$(document).height()-$(window).height();
  }else{
      dest=$(this.hash).offset().top;
  }
  //go to destination
  $('html,body').animate({scrollTop:dest}, 700,'swing');
});
