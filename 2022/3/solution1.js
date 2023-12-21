const readline = require("readline");
const fs = require("fs");

const path = "./file.txt";

const rl = readline.createInterface({
	input: fs.createReadStream(path),
});

let tot = 0;
rl.on("line", function (input) {
  	var A = input.slice(0, input.length/2);
  	var B = input.slice(input.length/2, input.length);

  	tot += score(common(A,B));
}).on("close", function() {
	console.log(tot);
});

function common(a,b) {
	var setA = a.split('');
	var setB = new Set(b.split(''));
	var c;
	setA.forEach(element => {
		if(!c && setB.has(element)) {
			c = element;
		}

	})

	return c;
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