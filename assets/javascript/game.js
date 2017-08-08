  
$(document).ready(function(){


  var targetNumber = "";
  // $("#number-to-guess").text(targetNumber);
  var counter = 0;
  var wins = 0;
  var loses = 0;
  // Now for the hard part. Creating multiple crystals each with their own unique number value.
  // var record =
 $(".record").html("wins: " + wins + "<br><br>" +"loses: " + loses);

  // create 4 var for each crystal. 


  var numberOptions1 = "";
  var numberOptions2 = "";
  var numberOptions3 = "";
  var numberOptions4 = "";

  //give random number for each crystal.
  targetNumber=Math.floor(Math.random()*120)+19;
    console.log(targetNumber);
  $("#number-to-guess").html(targetNumber);
  numberOptions1=Math.floor(Math.random()*12)+1;
    console.log(numberOptions1);
  numberOptions2=Math.floor(Math.random()*12)+1;
    console.log(numberOptions2);
  numberOptions3=Math.floor(Math.random()*12)+1;
    console.log(numberOptions3);
  numberOptions4=Math.floor(Math.random()*12)+1;
    console.log(numberOptions4);
  // Next we create a for loop to create crystals for every numberOption.
  // for (var i = 0; i < numberOptions.length; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    var imageCrystal2 = $("<img>");
    var imageCrystal3 = $("<img>");
    var imageCrystal4 = $("<img>");  
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    imageCrystal2.addClass("crystal2-image");
    imageCrystal3.addClass("crystal3-image");
    imageCrystal4.addClass("crystal4-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/diamond.jpg");
    imageCrystal2.attr("src", "assets/images/Crystalwatercolor.jpg");
    imageCrystal3.attr("src", "assets/images/roundblue.jpg");
    imageCrystal4.attr("src", "assets/images/tanzanite.jpg");
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions1);
    imageCrystal2.attr("data-crystalvalue2", numberOptions2);
    imageCrystal3.attr("data-crystalvalue3", numberOptions3);
    imageCrystal4.attr("data-crystalvalue4", numberOptions4);   
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    $("#crystals2").append(imageCrystal2);
    $("#crystals3").append(imageCrystal3);
    $("#crystals4").append(imageCrystal4);
  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);
    if (counter === targetNumber) {
      alert("You win!");
      wins++;
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
      var counter = 0;
      loses--;

    }
  });

    $(".crystal2-image").on("click", function() {
      var crystalValue2 = ($(this).attr("data-crystalvalue2"));
    crystalValue2 = parseInt(crystalValue2);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue2;
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);
    if (counter === targetNumber) {
      alert("You win!");
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
    }
  });
    $(".crystal3-image").on("click", function() {
      var crystalValue3 = ($(this).attr("data-crystalvalue3"));
    crystalValue2 = parseInt(crystalValue3);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue3;
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);
    if (counter === targetNumber) {
      alert("You win!");
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
    }
  });
    $(".crystal4-image").on("click", function() {
      var crystalValue4 = ($(this).attr("data-crystalvalue4"));
    crystalValue4 = parseInt(crystalValue4);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue4;
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);
    if (counter === targetNumber) {
      alert("You win!");
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
    }
  });
});