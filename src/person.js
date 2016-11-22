function Person (attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.imperialswitch = attr.imperialswitch;
}

Person.prototype.calculate_bmi = function(){
  calculator = new BMICalculator();
  calculator.bmi(this);
};
