
var totalDisplay = document.getElementById("totalDisplay"); //the display element
var newNumber = false; //this will be used to clear the display when a new number is entered
var equation = ""; //our equation that will be calculated when the "equals" button is pressed

//clear the display and equation
$(".clear").click(function() {
  totalDisplay.innerText = "0";
  equation = "";
});

if (totalDisplay.innerText == "0") {
  newNumber = true;
};

$(".number").click(function() {
  if (newNumber) {
    totalDisplay.innerText = "";
  }
    var number = $(this).children("p").text();
    buildNumber(number);
    newNumber = false;
});

//append a clicked number onto the end of the current totalDisplay
function buildNumber(digit) {
  totalDisplay.innerText += digit;
}

$(".sign").click(function() {
 var number = parseFloat(totalDisplay.innerText);
  totalDisplay.innerText = 0 - number;
});

$(".operation").click(function() {
  var operation = $(this).children("p").text();
  //change string into a number
  var number = parseFloat(totalDisplay.innerText);
  buildEquation(number, operation);
  newNumber = true;
});

//append current totalDisplay and operation to the equation
function buildEquation(number, operation) {
  equation += number + operation;
}

$(".equals").click(function() {
  //change string into number
  var number = parseFloat(totalDisplay.innerText);
  var totalValue = equals(number);
  totalDisplay.innerText = totalValue;
  newNumber = true;
  equation = "";
});

//append current totalDisplay on to equation and solve
function equals(number) {
  equation += number;
  console.log(equation);
  var totalValue = eval(equation);
  console.log(totalValue);
  return totalValue;
}