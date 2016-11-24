function BMICalculator(){
}

BMICalculator.prototype.bmi = function(person) {
  var weight = person.weight;
  var height = person.height;
  var feet = person.height_feet;
  var inches = person.height_inches;
  var imperialswitch = person.imperialswitch;
  if (isNaN(person.height_inches)){
    inches = 0;
  }
  if (weight > 0 && (height > 0 || feet > 0)) {
    var k;
    var f;
    if (imperialswitch === true){
      //Turn feet into inches, turn it into inches. put inches in the calculatio
      totalfeet = feet * 12;
      height = totalfeet + inches;
      f = 703;
      k = 1;
    }
    else {
      f = 1;
      k = 100;
    }
    var finalBmi = weight * f / Math.pow((height / k),2);
    person.bmiValue = parseFloat(finalBmi.toFixed(2));
    //Sets so it is parsing the value to only 2 decimals
    setBMIMessage(person);
  }
};

function setBMIMessage (person) {
  if (person.bmiValue < 18.5 ) {
    person.bmiMessage = "underweight";
  }

  if (person.bmiValue >= 18.5 && person.bmiValue <= 25) {
    person.bmiMessage = "normal";
  }

  if (person.bmiValue > 25 && person.bmiValue <= 30) {
    person.bmiMessage = "overweight";
  }

  if (person.bmiValue > 30 ) {
    person.bmiMessage = "obese";
  }
}
