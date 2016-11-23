describe ("UI - index.html", function() {
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = ".";
    loadFixtures("index.html");
    $.holdReady(false);
  });

  describe ("It should be able to take an input", function() {
   it ("Of weight, 90", function(){
     $("#weight").val(90);
     expect($("#weight").val()).toEqual ("90");
   });

   it ("Of height 186", function(){
     $("#height").val(186);
     expect($("#height").val()).toEqual ("186");
   });
 });

 describe ("Dispays response messages with metricswitch", function() {
   beforeEach(function() {
     $(':radio')[0].click();
     $("#weight").val("90");
     $("#height").val("186");
     $("#calculate").click();
   });

   it ("About BMI value", function() {
     expect($("#display_value").text()).toEqual ("Your BMI is 26.01");
   });

   it ("About BMI message", function() {
     expect($("#display_message").text()).toEqual ("and you are overweight" );
   });
 });

 describe ("Dispays response messages with imperialswitch", function() {
    beforeEach(function() {
      $(':radio')[1].click();
      $("#weight").val("200");
      $("#height").val("66");
      $("#calculate").click();
    });

    it ("About BMI value", function() {
      expect($("#display_value").text()).toEqual ("Your BMI is 32.28");
    });

    it ("About BMI message", function() {
      expect($("#display_message").text()).toEqual ("and you are obese" );
    });
  });

  // describe ("You should be able to add your height in feet'inches''");
  // beforeEach(function() {
  //   $(':radio')[1].click();
  //   $("#weight").val("200");
  //   $("#height").val("6'2''");
  //   $("#calculate").click();
  // });
  //
  // it("Displays the right response message", function(){
  //
  // });

});
