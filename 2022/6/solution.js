const readline = require("readline");
const fs = require("fs");

const path = "./file.txt";

const rl = readline.createInterface({
	input: fs.createReadStream(path),
});

let pos = 0;
const arr = [];

rl.on("line", function(line) {
	for(let c of line) {
		if(isSolved(arr)) {
			break;
		} else {
			if(arr.length == 4) {
				arr.splice(0,1);
			}
			arr.push(c);
		}
		pos++;

	}
}).on("close", function() {
	console.log(pos);
});

function isSolved(a) {
	return a.length == 4 && !containsDupes(a);
}

function containsDupes(a) {
	let set = new Set(a);
	return set.size != arr.length;
}