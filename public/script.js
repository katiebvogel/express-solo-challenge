
$(document).ready(function(){

$(function(){
  $('.getBalance').on('click', function(){

    $('.balance').empty();

    var promise = $.ajax('/balance');
    promise.then(function(response){
      console.log(response);

    $('.balance').append('<p>' + response.getBalance + '</p>');
    $('.balance').append('<p>' + response.getMoney + '</p>')
    $('p').hide();
    $('p').slideDown("slow"); 
  })
})

});

});
// <input type="text" />
