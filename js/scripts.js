$(document).ready(function(){
  $("#formOne").submit(function(){
    const constituentNameInput = $("input#constituent-name").val();

    $(".constituent-name").append(constituentNameInput);

    $("#letter-filled").show();
    $("#letter-unfilled").hide();
    event.preventDefault();
  })
});