describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186, imperialswitch: false});
    calculate = new BMICalculator();
  });

  it("Calculates BMI for a person using metric method", function(){
    calculate.bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

  it ("Displays a BMI message", function(){
    calculate.bmi(person);
    expect(person.bmiMessage).toEqual("overweight");
  });

  describe ("Calculates BMI with imperial", function(){
    beforeEach(function(){
      person = new Person({weight: 200, height_feet: 6, height_inches: 2, imperialswitch: true});
      calculate = new BMICalculator();
    });

      it ("Calculates BMI for a person using imperial method with feet and inches", function(){
        calculate.bmi(person);
        expect(person.bmiValue).toEqual(25.68);
      });
    });
});
