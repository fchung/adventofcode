const readline = require("readline");
const fs = require("fs");

const path = "./file.txt";

const rl = readline.createInterface({
	input: fs.createReadStream(path),
});

let crates = [
		['T','P','Z','C','S','L','Q','N'],
		['L','P','T','V','H','C','G'],
		['D','C','Z','F'],
		['G','W','T','D','L','M','V','C'],
		['P','W','C'],
		['P','F','J','D','C','T','S','Z'],
		['V','W','G','B','D'],
		['N','J','S','Q','H','W'],
		['R','C','Q','F','S','L','V']
	];


rl.on("line", function (input) {
	let arr = input.match(/\d+/g);
	move(parseInt(arr[0]),crates[parseInt(arr[1])-1], crates[parseInt(arr[2])-1]);

}).on("close", function() {
	console.log(crates);
});

function move(num, from, to) {
	to.push.apply(to,from.splice(from.length - num).reverse());
}