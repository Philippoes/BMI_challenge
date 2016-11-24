$(document).ready(function () {
  $("#feet").hide();
  $("#inches").hide();
  $("#imperialweight").hide();

  $("#metriccheck").click(function(){
      $("#feet").hide();
      $("#inches").hide();
      $("#imperialweight").hide();
      $("#height").show();
      $("#metricweight").show();
  });

  $("#imperialcheck").click(function(){
      $("#height").hide();
      $("#metricweight").hide();
      $("#feet").show();
      $("#inches").show();
      $("#imperialweight").show();
  });

  $("#calculate").click(function () {
    var w;
    var h;
    var i;
    var person;
    if ($('input[name=imperialswitch]:checked').val() === "true") {
      var k = parseFloat($("#inches").val());
      var o = parseFloat($("#feet").val());
      w = parseFloat($("#imperialweight").val());
      h = parseFloat($("#height").val());
      if (isNaN(o)|| isNaN(w)){
        $("#error_message").html("Please input integers!");
      } else {
        i = ($('input[name=imperialswitch]:checked').val() === "true");
        person = new Person({weight: w, height: h, height_feet: o, height_inches: k, imperialswitch: i});
        person.calculate_bmi();
        $("#display_value").html("Your BMI is " + person.bmiValue);
        $("#display_message").html("and you are "+ person.bmiMessage);
      }
    }
    else {
    w = parseFloat($("#metricweight").val());
    h = parseFloat($("#height").val());
    if (isNaN(w) || isNaN(h)){
      $("#error_message").html("Please input integers!");
    } else {
    i = ($('input[name=imperialswitch]:checked').val() === "true");
    person = new Person({weight: w, height: h, imperialswitch: i});
    person.calculate_bmi();
    $("#display_value").html("Your BMI is " + person.bmiValue);
    $("#display_message").html("and you are "+ person.bmiMessage);
  }
  }
  });

  // $('input[name=imperialswitch]'.val("true")).click(function (){
  //
  // });
});
