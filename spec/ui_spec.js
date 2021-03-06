describe ("UI - index.html", function() {
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = ".";
    loadFixtures("index.html");
    $.holdReady(false);
  });

  describe ("It should be able to take an input", function() {
   it ("Of weight, 90", function(){
     $("#metricweight").val(90);
     expect($("#metricweight").val()).toEqual ("90");
   });

   it ("Of height 186", function(){
     $("#height").val(186);
     expect($("#height").val()).toEqual ("186");
   });

 describe ("Dispays response messages with metricswitch", function() {
   beforeEach(function() {
     $(':radio')[0].click();
     $("#metricweight").val("90");
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
 });

 describe ("Dispays response messages with imperialswitch", function() {
    beforeEach(function() {
      $(':radio')[1].click();
      $("#imperialweight").val("200");
      $("#feet").val("6");
      $("#inches").val("2");
      $("#calculate").click();
    });

    it ("About BMI value", function() {
      expect($("#display_value").text()).toEqual ("Your BMI is 25.68");
    });

    it ("About BMI message", function() {
      expect($("#display_message").text()).toEqual ("and you are overweight" );
    });
  });
});
 //  describe ("Should give error", function () {
 //   it ("If there is no input in metric", function (){
 //       $(':radio')[0].click();
 //       $("#weight").val("");
 //       $("#height").val("");
 //       $("#calculate").click();
 //       expect($("#display_value").text()).toEqual ("You have to input something if you want me to calculate!" );
 //     });
 // });
// });

  // describe ("You should be able to add your height in feet'inches''");
  // beforeEach(function() {
  //   $(':radio')[1].click();
  //   $("#weight").val("200");
  //   $("#height").val("6'2''");
  //   $("#calculate").click();
  // });
  //
  // it("Displays the right response message", function(){
  //   expect($("$display_value").text()).toEqual ("Your BMI is xxxx");
  // });

// });
