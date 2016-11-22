$(document).ready(function () {

//Should i add person up here in order to switch between imperialswitch true/false
  // $(':radio')[0].click(function(){
  //    person.imperialswitch = false;
  // });
  //
  // $(':radio')[1].click(function(){
  //    person.imperialswitch = true;
  // });

  $("#calculate").click(function () {
    var w = parseFloat($("#weight").val());
    var h = parseFloat($("#height").val());
    var person = new Person({weight: w, height: h, imperialswitch: true}); //I have to switch here between true/false manually in order to calculate with metrics/imperial in the browser
    person.calculate_bmi();
    $("#display_value").html("Your BMI is " + person.bmiValue);
    $("#display_message").html("and you are "+ person.bmiMessage);
  });
});
