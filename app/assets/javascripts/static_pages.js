$(document).ready(function(){
  var add_color = function(){
    var box = $('<div>');
    box.addClass('box');

    var color = $('#color').val();
    box.css('background-color', color);

    $('#colors').prepend(box);

    $('#color').val('').focus();
  };

  $('#add_color').on('click', add_color);
});