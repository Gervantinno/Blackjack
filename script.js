"use strict";

//the image we click on
const deck = document.getElementById("deckImage");
//the div in which we will put our cards
const handList = document.querySelector(".card-wrapper");
//our current score
const score = document.getElementById("scoreLabel");
//the object array with all available cards
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

deck.addEventListener("click", () => {
	var index = Math.floor(Math.random() * hand.length);

	score.textContent = parseInt(score.textContent) + hand[index].value;

	var image = document.createElement("img");
	image.src = hand[index].imageSrc;
	//images size is 5/7
	image.style.width = "200px";
	image.style.height = "280px";

	handList.appendChild(image);

	hand.splice(index, 1);

	gameState();
});

function gameState() {
	if (score.textContent < 21) return;
	if (score.textContent == 21) alert("You won");
	if (score.textContent > 21) alert("You've lost");
	location.reload();
}
