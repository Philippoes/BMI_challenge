function Person (attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.imperialswitch = attr.imperialswitch;
  this.height_feet = attr.height_feet;
  this.height_inches = attr.height_inches;
}

Person.prototype.calculate_bmi = function(){
  calculator = new BMICalculator();
  calculator.bmi(this);
};
