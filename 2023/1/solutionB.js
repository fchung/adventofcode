const readline = require("readline");
const fs = require("fs");

const path = "./file.txt";

const rl = readline.createInterface({
	input: fs.createReadStream(path),
});

let total = 0;
let regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

rl.on("line", function (input) {
	let arr = Array.from(input.matchAll(regex), (match) => match[1]);
	 console.log(arr);
	// console.log(parseNum(arr[0]));
	// console.log(parseNum(arr[arr.length - 1]));
	// console.log(Number(parseNum(arr[0]) + parseNum(arr[arr.length - 1])));
	total += Number(parseNum(arr[0]) + parseNum(arr[arr.length - 1]));
	// console.log(total);
}).on("close", function() {
	console.log(total);
});

function parseNum(word) {
	if(word == 'one') {
		return '1';
	} else if(word == 'two') {
		return '2';
	} else if(word == 'three') {
		return '3';
	} else if(word == 'four') {
		return '4';
	} else if(word == 'five') {
		return '5';
	} else if(word == 'six') {
		return '6';
	} else if(word == 'seven') {
		return '7';
	} else if(word == 'eight') {
		return '8';
	} else if(word == 'nine') {
		return '9';	
	} else {
		return word;
	}
}
