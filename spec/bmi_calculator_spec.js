describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

  it("Calculates BMI for a person using metric method", function(){
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

  it ("Displays a BMI message", function(){
    calculator.metric_bmi(person);
    expect(person.bmiMessage).toEqual("overweight");
  });
});
