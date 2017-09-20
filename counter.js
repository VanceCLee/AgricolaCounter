function addPlayer() {

}

function validate(id, col) {
	if (id.value == "") {
		id.value = "0";
	}
	addScore(col);
}

function addScore(col) {
	var fields = parseInt(document.getElementById('fields' + col).value);
	var pastures = parseInt(document.getElementById('pastures' + col).value);
	var grain = parseInt(document.getElementById('grain' + col).value);
	var vegetables = parseInt(document.getElementById('vegetables' + col).value);
	var sheep = parseInt(document.getElementById('sheep' + col).value);
	var wildBoar = parseInt(document.getElementById('wildBoar' + col).value);
	var cattle = parseInt(document.getElementById('cattle' + col).value);
	var unusedSpaces = parseInt(document.getElementById('unusedSpaces' + col).value);
	var fencedStables = parseInt(document.getElementById('fencedStables' + col).value);
	var clayRooms = parseInt(document.getElementById('clayRooms' + col).value);
	var stoneRooms = parseInt(document.getElementById('stoneRooms' + col).value);
	var familyMembers = parseInt(document.getElementById('familyMembers' + col).value);
	var cardPoints = parseInt(document.getElementById('cardPoints' + col).value);
	var bonusPoints = parseInt(document.getElementById('bonusPoints' + col).value);
	var total = document.getElementById('total' + col);

	var score = fields + pastures + grain + vegetables + sheep + wildBoar + cattle + unusedSpaces + fencedStables + clayRooms + stoneRooms + familyMembers + cardPoints + bonusPoints;
	total.innerHTML = score;
}