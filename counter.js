var players = 4;
var pointFields = ['fields', 'pastures', 'grain', 'vegetables', 'sheep', 'wildBoar', 'cattle', 'unusedSpaces', 'fencedStables', 'clayRooms', 'stoneRooms', 'familyMembers', 'cardPoints', 'bonusPoints'];

function addPlayer() {
	if (players < 4) {
		players += 1;
		changePlayerVisibility(true);
	}
}

function removePlayer() {
	if (players > 1) {
		changePlayerVisibility(false);
		players -= 1;
	}
}

function changePlayerVisibility(makeVisible) {
	var elements = inputsArray(players);
	for (var i = 0; i < pointFields.length; i++) {
		if (makeVisible) {
			elements[pointFields[i]].style.visibility = "visible";
		}
		else {
			elements[pointFields[i]].style.visibility = "hidden";
		}
	}
	if (makeVisible) {
		elements['player'].style.visibility = "visible";
		elements['total'].style.visibility = "visible";
	}
	else {
		elements['player'].style.visibility = "hidden";
		elements['total'].style.visibility = "hidden";
	}

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
	}
	elements["total"] = document.getElementById('total' + col);
	elements["player"] = document.getElementById('player' + col);

	return elements;
}

function addScore(col) {
	var elements = inputsArray(col);
	var score = 0;
	for (var i = 0; i < pointFields.length; i++) {
		score += parseInt(elements[pointFields[i]].value);
	}
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