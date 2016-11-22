describe ("UI - index.html", function() {
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = ".";
    loadFixtures("index.html");
    $.holdReady(false);
  });

  it ("Should be able to take an input of weight of 90", function(){
    $("#weight").val(90);
    expect($("#weight").val()).toEqual ("90");
  });
});
