$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var text123Input = $("input#text123").val().toUpperCase();;

    $(".response").text(text123Input);

    event.preventDefault();
  });
});
