const deck = document.getElementById("deckImage");
const handList = document.getElementById("handList");
const score = document.getElementById("scoreLabel");
var hand = [
	{ name: "2", value: 2 },
	{ name: "3", value: 3 },
	{ name: "4", value: 4 },
	{ name: "5", value: 5 },
	{ name: "6", value: 6 },
	{ name: "7", value: 7 },
	{ name: "8", value: 8 },
	{ name: "9", value: 9 },
	{ name: "10", value: 10 },
	{ name: "J", value: 10 },
	{ name: "Q", value: 10 },
	{ name: "K", value: 10 },
	{ name: "T", value: 11 },
];
deck.addEventListener("click", () => {
	var index = Math.floor(Math.random() * hand.length);

	handList.textContent += " " + hand[index].name;

	score.textContent = parseInt(score.textContent) + hand[index].value;

	hand.splice(index, 1);

	gameState();
});

function gameState() {
	if (score.textContent < 21) return;
	if (score.textContent == 21) alert("You won");
	if (score.textContent > 21) alert("You've lost");
	location.reload();
}
