//A RGB game that chooses random colors and helps user learn RGB.

//Set variables to call elements in html
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var message = document.querySelector("#message");
var headerColor = document.getElementById("header");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


// Event listener for when "Easy" or "Hard" button is clicked
//		First must loop through 'modeButtons' because they
// 		are being treated like an array. Class is added to two items
for (var i= 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
//figure out how many squares to show
		if(this.textContent === "Easy"){
			numSquares = 3;
			for (i = squares.length-1; i > numSquares-1; i--){
//switch number of squares/color generated to 3
				squares[i].style.display = "none";
			}
		} else {
			numSquares = 6;
			for (i = squares.length-1; i > 2; i--){
				squares[i].style.display = "block";
			}
		}
//reset game- like clicking New Colors button
		resetGame();
	})
}


//Event listener for when 'New Colors' button is clicked
resetButton.addEventListener("click", resetGame)


// Function to reset game.
//	Should reset colors/game
function resetGame() { 
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//Change "display" color--> colorDisplay
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (i = 0; i < colors.length; i ++){
		squares[i].style.backgroundColor = colors[i];
	}
	//Reset textContent, button, header color
	message.textContent = "";
	resetButton.textContent = "New Colors";
	headerColor.style.backgroundColor = "steelblue";
	console.log(colors);
}

//Set the text showing to the RGB "picked Color"
colorDisplay.textContent = pickedColor;


//for loop to go through all colors in array
for (i = 0; i < colors.length; i++) {

	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of picked square
		var clickedColor = this.style.backgroundColor;

		//compare color to pickedColor
		if (clickedColor === pickedColor) {
				message.textContent = "Correctomundo!";
				resetButton.textContent = "Play Again?";
				changeColors();				
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
		};
	
		//this.style.backgroundColor = "rgb(0, 0, 0)";
	});
}


 //function to make all colors the 'pickedColor' when user gets correct
function changeColors (){
	//loop through all squares
	for (i = 0; i < squares.length; i++){
	//change color
		squares[i].style.backgroundColor = pickedColor;
	}	
	headerColor.style.backgroundColor = pickedColor;
}



//function to pick the 'pickedColor' (the correct color)
 function pickColor(){
 	//find length of array set for number of colors
 	var random = Math.floor(Math.random() * colors.length);
 	//return one of the colors from the array to set as pickedColor
 	return colors[random];
 }


//function to make an array of the randomColors
 function generateRandomColors(num){
 	//make an array
 	var arr = [];
 	for (i = 0; i < num; i++){
 		//get random color and push into array
 		arr.push(RandomColor())
 	}
 	//return the array
 	return arr;
 }


//function to get one random RGB
function RandomColor() {
	 	var r = Math.floor(Math.random()*256);
	 	var g = Math.floor(Math.random()*256);
	 	var b = Math.floor(Math.random()*256);
	 	return "rgb(" + r + ", " + g + ", " + b + ")" ;
 }

exports.game