"use strict";

//the image we click on
const deckImage = document.querySelector(".deckImage");
//the div in which we will put our cards
const handList = document.querySelector(".you");
//the div in which we will put enemy's cards
const opponentHandList = document.querySelector(".enemy");
//our current score
const score = document.querySelector(".scoreLabel");
//the object array with all available cards
const endBtn = document.querySelector(".endGameButton");

var hand = [
	{
		name: "2",
		value: 2,
		imageSrc: "images/two.png",
	},
	{
		name: "3",
		value: 3,
		imageSrc: "images/three.png",
	},
	{
		name: "4",
		value: 4,
		imageSrc: "images/four.png",
	},
	{
		name: "5",
		value: 5,
		imageSrc: "images/five.png",
	},
	{
		name: "6",
		value: 6,
		imageSrc: "images/six.png",
	},
	{
		name: "7",
		value: 7,
		imageSrc: "images/seven.png",
	},
	{
		name: "8",
		value: 8,
		imageSrc: "images/eight.png",
	},
	{
		name: "9",
		value: 9,
		imageSrc: "images/nine.png",
	},
	{
		name: "10",
		value: 10,
		imageSrc: "images/ten.png",
	},
	{
		name: "J",
		value: 10,
		imageSrc: "images/jack.png",
	},
	{
		name: "Q",
		value: 10,
		imageSrc: "images/queen.png",
	},
	{
		name: "K",
		value: 10,
		imageSrc: "images/king.png",
	},
	{
		name: "T",
		value: 11,
		imageSrc: "images/ace.png",
	},
];

var botHandScore = 0;

deckImage.addEventListener("click", () => {
	document.querySelector(".press-hint").classList.add("hidden");
	var index = Math.floor(Math.random() * hand.length);

	score.textContent = parseInt(score.textContent) + hand[index].value;

	var image = document.createElement("img");
	image.src = hand[index].imageSrc;
	//images size is 5/7
	image.classList.add("card-image");

	handList.appendChild(image);

	hand.splice(index, 1);

	var index = Math.floor(Math.random() * hand.length);
	botHandScore += hand[index].value;

	var image = document.createElement("img");
	image.src = hand[index].imageSrc;
	//class for sizing
	image.classList.add("card-image");
	//we don't want to see other's player cards
	image.classList.add("hidden-image");

	opponentHandList.appendChild(image);

	hand.splice(index, 1);

	var state = gameState();
	if (state !== "Continue") {
		gameEnd(state);
	}
});

endBtn.addEventListener("click", () => {
	var state = gameState();
	if (state === "Continue") {
		if (score.textContent == botHandScore) state = "Draw";
		else if (score.textContent > botHandScore) state = "You've won";
		else state = "You've lost";
	}
	gameEnd(state);
});

document.querySelector(".reloadBtn").addEventListener("click", () => {
	location.reload();
});

function gameState() {
	//both of players can play on
	if (score.textContent < 21 && botHandScore < 21) {
		return "Continue";
	}
	if (
		score.textContent == botHandScore ||
		(score.textContent > 21 && botHandScore > 21)
	) {
		//else we both win or lose, which means draw
		return "Draw";
	}
	//in this cade we don't care what the opponent has
	if (score.textContent == 21) return "You've won";
	//in this cade we also don't care what the opponent has
	if (score.textContent > 21) return "You've lost";
	//if we got here then we have less than 21
	if (botHandScore == 21) return "You've lost";
	//last possible case is that we have less than 21 and bot has more than 21
	return "You've won";
}

function gameEnd(state) {
	document.querySelector(".game-result").textContent = state;
	var oppScore = document.querySelector(".opponent-score");
	oppScore.textContent += botHandScore;
	oppScore.classList.remove("hidden");
	handReveal(opponentHandList);

	document.querySelector(".on-game").classList.add("hidden");
	document.querySelector(".after-game").classList.remove("hidden");
}

//after the end of the game show opponent's cards
function handReveal(hand) {
	hand.querySelectorAll("img").forEach((element) => {
		element.classList.remove("hidden-image");
	});
}
