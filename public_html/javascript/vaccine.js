$(document).ready(function(){
  $("#submit").click(function(){
    var x = $("form").serializeArray();
    $.each(x, function(i, field){
      $("#results").append(field.name + ":" + field.value + " ");
    });
    $("form").trigger("reset");
    localStorage.setItem(localStorage.length, JSON.stringify(x));
  });
  $("#home").click(function(){
      location.href = "../index.html";
  });
  for (i=0; i < localStorage.length; i++){
      var array = JSON.parse(localStorage.getItem(i));
      var bookingNum = i + 1;
      $("#results").append("Booking "+ bookingNum + ":");
      $.each(array, function(i, field){
      $("#results").append(field.name + ":" + field.value + " ");
    });
  }
});
