$(function(){
  $('.box1').slideDown('slow', function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '100px',
      'width': '200px'
    }).slideUp(2000);
  });
});