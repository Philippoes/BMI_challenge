describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
  });

  it("Should have a weight of 90", function(){
    expect(person.weight).toEqual(90);
  });

  it("Should have a height of 186", function(){
    expect(person.height).toEqual(186);
  });

  it("Should calculate BMI value", function(){
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(26.01);
  });

  it("Should display a BMI Message", function(){
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("overweight");
  });
});
