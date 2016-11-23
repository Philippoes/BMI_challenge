$(document).ready(function () {
  $("#calculate").click(function () {
    var w = parseFloat($("#weight").val());
    var h = parseFloat($("#height").val());
    var i = ($('input[name=imperialswitch]:checked').val() === "true");
    var person = new Person({weight: w, height: h, imperialswitch: i});
    person.calculate_bmi();
    $("#display_value").html("Your BMI is " + person.bmiValue);
    $("#display_message").html("and you are "+ person.bmiMessage);
  });

  // $('input[name=imperialswitch]'.val("true")).click(function (){
  //
  // });
});
