const readline = require("readline");
const fs = require("fs");

const path = "./file.txt";

const rl = readline.createInterface({
	input: fs.createReadStream(path),
});

let numOfPairs = 0;


rl.on("line", function (input) {
	let arr = input.match(/\d+/g);
	if(containpair(parseInt(arr[0]), parseInt(arr[1]), parseInt(arr[2]), parseInt(arr[3]))) {
		numOfPairs++;
	} 
}).on("close", function() {
	console.log(numOfPairs);
});


function contains(num, start, end) {
	return start <= num && end >= num;
}

function containpair(start_1, end_1, start_2, end_2) {
	return (contains(start_1, start_2, end_2) || contains(end_1, start_2, end_2)) || 
		(contains(start_2, start_1, end_1) || contains(end_2, start_1, end_1));
}