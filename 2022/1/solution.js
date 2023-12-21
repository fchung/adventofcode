const readline = require("readline");
const fs = require("fs");

const path = "./file.txt";

const rl = readline.createInterface({
	input: fs.createReadStream(path),
});

let cur = 0;
let arr = [];

rl.on("line", function (input) {
  	if(input) {
  		cur += Number(input);
  	} else {
  		arr.push(cur);
  		cur = 0;
  	}
}).on("close", function() {
	arr.sort((a,b)=>b-a);

	console.log(arr[0] + arr[1] + arr[2]);
});

