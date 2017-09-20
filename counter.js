var players = 2;

function addPlayer() {
	if (players < 4) {

	}
}

function activatePlayer() {
	var elements = inputsArray(col);
	
}

function clearCell(id) {
	if (id.value == "0") {
		id.value = "";
	}
}

function validate(id, col) {
	if (id.value == "") {
		id.value = "0";
	}
	addScore(col);
}

function addScore(col) {
	var elements = inputsArray(col);
	var fields = parseInt(elements['fields'].value);
	var pastures = parseInt(elements['pastures'].value);
	var grain = parseInt(elements['grain'].value);
	var vegetables = parseInt(elements['vegetables'].value);
	var sheep = parseInt(elements['sheep'].value);
	var wildBoar = parseInt(elements['wildBoar'].value);
	var cattle = parseInt(elements['cattle'].value);
	var unusedSpaces = parseInt(elements['unusedSpaces'].value);
	var fencedStables = parseInt(elements['fencedStables'].value);
	var clayRooms = parseInt(elements['clayRooms'].value);
	var stoneRooms = parseInt(elements['stoneRooms'].value);
	var familyMembers = parseInt(elements['familyMembers'].value);
	var cardPoints = parseInt(elements['cardPoints'].value);
	var bonusPoints = parseInt(elements['bonusPoints'].value);

	var score = fields + pastures + grain + vegetables + sheep + wildBoar + cattle + unusedSpaces + fencedStables + clayRooms + stoneRooms + familyMembers + cardPoints + bonusPoints;
	elements['total'].innerHTML = score;
}

function inputsArray(col) {
	var elements = [];
	elements["fields"] = document.getElementById('fields' + col);
	elements["pastures"] = document.getElementById('pastures' + col);
	elements["grain"] = document.getElementById('grain' + col);
	elements["vegetables"] = document.getElementById('vegetables' + col);
	elements["sheep"] = document.getElementById('sheep' + col);
	elements["wildBoar"] = document.getElementById('wildBoar' + col);
	elements["cattle"] = document.getElementById('cattle' + col);
	elements["unusedSpaces"] = document.getElementById('unusedSpaces' + col);
	elements["fencedStables"] = document.getElementById('fencedStables' + col);
	elements["clayRooms"] = document.getElementById('clayRooms' + col);
	elements["stoneRooms"] = document.getElementById('stoneRooms' + col);
	elements["familyMembers"] = document.getElementById('familyMembers' + col);
	elements["cardPoints"] = document.getElementById('cardPoints' + col);
	elements["bonusPoints"] = document.getElementById('bonusPoints' + col);
	elements["total"] = document.getElementById('total' + col);

	return elements;
}