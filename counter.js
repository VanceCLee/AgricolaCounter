var players = 2;
var pointFields = ['fields', 'pastures', 'grain', 'vegetables', 'sheep', 'wildBoar', 'cattle', 'unusedSpaces', 'fencedStables', 'clayRooms', 'stoneRooms', 'familyMembers', 'cardPoints', 'bonusPoints'];

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

function inputsArray(col) {
	var elements = [];
	for (var i = 0; i < pointFields.length; i++) {
		elements[pointFields[i]] = document.getElementById(pointFields[i] + col);
		console.log(i + "hi");
	}
	elements["total"] = document.getElementById('total' + col);

	return elements;
}

function addScore(col) {
	var elements = inputsArray(col);
	var score = 0;
	for (var i = 0; i < pointFields.length; i++) {
		score += parseInt(elements[pointFields[i]].value);
	}
	// var fields = parseInt(elements['fields'].value);
	// var pastures = parseInt(elements['pastures'].value);
	// var grain = parseInt(elements['grain'].value);
	// var vegetables = parseInt(elements['vegetables'].value);
	// var sheep = parseInt(elements['sheep'].value);
	// var wildBoar = parseInt(elements['wildBoar'].value);
	// var cattle = parseInt(elements['cattle'].value);
	// var unusedSpaces = parseInt(elements['unusedSpaces'].value);
	// var fencedStables = parseInt(elements['fencedStables'].value);
	// var clayRooms = parseInt(elements['clayRooms'].value);
	// var stoneRooms = parseInt(elements['stoneRooms'].value);
	// var familyMembers = parseInt(elements['familyMembers'].value);
	// var cardPoints = parseInt(elements['cardPoints'].value);
	// var bonusPoints = parseInt(elements['bonusPoints'].value);

	// var score = fields + pastures + grain + vegetables + sheep + wildBoar + cattle + unusedSpaces + fencedStables + clayRooms + stoneRooms + familyMembers + cardPoints + bonusPoints;
	elements['total'].innerHTML = score;
}


function clearAll() {
	for (var col = 1; col <= 4; col++) {
		var elements = inputsArray(col);
		for (var i = 0; i < pointFields.length; i++) {
			elements[pointFields[i]].value = "0";
		}
		addScore(col);
	}
}