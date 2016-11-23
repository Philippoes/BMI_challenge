$(document).ready(function () {


    // function showHeight() {
    //        $("#height").style.display = 'visible';
    //      }
    //
    //   function hideHeight(){
    //         $("#height").style.display = 'hidden';
    //       }
    //
  $("#calculate").click(function () {
    var w;
    var h;
    var i;
    var person;

    if ($('input[name=imperialswitch]:checked').val() === "true") {
      var k = parseFloat($("#inches").val());
      var o = parseFloat($("#feet").val());
      w = parseFloat($("#weight").val());
      h = parseFloat($("#height").val());
      i = ($('input[name=imperialswitch]:checked').val() === "true");
      person = new Person({weight: w, height: h, height_feet: o, height_inches: k, imperialswitch: i});
      person.calculate_bmi();
      $("#display_value").html("Your BMI is " + person.bmiValue);
      $("#display_message").html("and you are "+ person.bmiMessage);
    }
    else {
    w = parseFloat($("#weight").val());
    h = parseFloat($("#height").val());
    i = ($('input[name=imperialswitch]:checked').val() === "true");
    person = new Person({weight: w, height: h, imperialswitch: i});
    person.calculate_bmi();
    $("#display_value").html("Your BMI is " + person.bmiValue);
    $("#display_message").html("and you are "+ person.bmiMessage);
  }
  });

  // $('input[name=imperialswitch]'.val("true")).click(function (){
  //
  // });
});
