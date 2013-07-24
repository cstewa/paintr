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

  var add_image = function(){
    var image = $('#image').val();
    var image_box = $('<div>');

    image_box.addClass('box');
    image_box.css('background-image', 'url(' + image + ')');

    $('#images').prepend(image_box);

    $('#image').val('').focus();
  };

  var set_image = function(){
    var box = $(this);
    var image = box.css('background-image');
    $('#canvas').css('background-image', image);
  };

  $('#add_color').on('click', add_color);
  $('#colors').on('click', '.box', set_color);
  $('.paint_box').on('mouseover', paint);

  $('#add_image').on('click', add_image);
  $('#images').on('click', '.box', set_image);

  $('#save').on('click', function () {
    $.ajax({
      type: "POST",
      url: '/create',
      data: { url: $('#canvas').attr('style'), html: $('#canvas').html()},
      dataType: "script"
    });
  });

});