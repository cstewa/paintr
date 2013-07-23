$(document).ready(function(){
  var add_color = function(){
    var box = $('<div>');
    box.addClass('box');

    var color = $('#color').val();
    box.css('background-color', color);

    $('#colors').prepend(box);

    $('#color').val('').focus();
  };

  var set_color = function(){
    var box = $(this);
    var color = box.css('background-color');

    $('#selected_color').css('background-color', color)
  };


  var paint = function(){
    var paint_box = $(this);
    var color = $('#selected_color').css('background-color');

    paint_box.css('background-color', color);
  };

  $('#add_color').on('click', add_color);
  $('#colors').on('click', '.box', set_color);
  $('.paint_box').on('click', paint);
});