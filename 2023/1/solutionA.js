const readline = require("readline");
const fs = require("fs");

const path = "./file.txt";

const rl = readline.createInterface({
	input: fs.createReadStream(path),
});

let total = 0;
let regex = /\d/g;

rl.on("line", function (input) {
	let arr = input.match(regex);
	total += Number(arr[0] + arr[arr.length - 1]);
}).on("close", function() {
	console.log(total);
});
