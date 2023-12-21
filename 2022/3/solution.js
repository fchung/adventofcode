const readline = require("readline");
const fs = require("fs");

const path = "./file.txt";

const rl = readline.createInterface({
	input: fs.createReadStream(path),
});

let tot = 0;
let lineA, lineB;

rl.on("line", function (input) {
	if(lineA == null) {
		lineA = input;
		return;
	} else if (lineB == null) {
		lineB = input;
		return;
	} else {
		tot += score(common(common(lineA,lineB), input));
		lineA = null;
		lineB = null;
	}

}).on("close", function() {
	console.log(tot);
});

function common(a,b) {
	var setA = a.split('');
	var setB = new Set(b.split(''));
	var c = new Set();
	setA.forEach(element => {
		if(setB.has(element)) {
			c.add(element);
		}

	})

	return Array.from(c).join('');
}

function score(a) {
	if(a == null) {
		return 0;
	}
	if(a == a.toUpperCase()) {
		return a.charCodeAt(0) - 38;
	}
	return a.charCodeAt(0) - 96;
}