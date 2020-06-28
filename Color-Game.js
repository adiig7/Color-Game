var numsquares = 6;
var colors = generateRandomColor(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 =  document.querySelector("#h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numsquares = 3;
	colors = generateRandomColor(numsquares);
	pickedColour = pickColour();
	colorDisplay.textContent = pickedColour;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
		squares[i].style.background = colors[i];
	}
	else{
		squares[i].style.display = "none";
	}
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numsquares = 6;
	colors = generateRandomColor(numsquares);
	pickedColour = pickColour();
	colorDisplay.textContent = pickedColour;
	for (var i = 0; i < squares.length; i++) {
		
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";

	}
});


resetButton.addEventListener("click",function(){
	colors = generateRandomColor(numsquares);

	pickedColour = pickColour();

	colorDisplay.textContent = pickedColour;
	messageDisplay.textContent = "";
	this.textContent = "New Colors"

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});
	colorDisplay.textContent = pickedColour;

for(var i = 0; i< squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColour = this.style.background;
		if (clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct!"
			resetButton.textContent = "Play Again"
			changeColor(clickedColour);
			h1.style.background = clickedColour;
		}
		else{
			this.style.background =" #232323";
			messageDisplay.textContent = "Wrong!!!";
		}
});
}
function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}
function pickColour(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr = [];

	for (var i = 0; i < num; i++) {
			arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
