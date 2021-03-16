$("#buyticket").click(function() {
    $('html, body').animate({
      scrollTop: $(".second-page").offset().top
    }, 1000);
  });


$("#logoimg2").click(function() {
    $('html, body').animate({
      scrollTop: $(".first-page").offset().top
    }, 1000);
  });
  
  $('#buyticket').on('click',function(){
    $('#sliderh1').addClass('slide')
    $('#sagust').addClass('slide1')
    $('#solalt').addClass('slide')
    $('.blackslide2').addClass('slider')
    $('.blackslide').addClass('slider')
    $('.blackslide3').addClass('slider')

  })