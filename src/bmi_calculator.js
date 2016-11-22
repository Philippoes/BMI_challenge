function BMICalculator(){
}

BMICalculator.prototype.metric_bmi = function(person) {
  var weight = person.weight;
  var height = person.height;
  if (weight > 0 && height > 0) {
    //sets so you need to have a weight & height above 0, the finalBmi will have an infinite loop if height is 0 since you can"t divide by 0
    var k;
    var f;
    if (imperial === true){
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
