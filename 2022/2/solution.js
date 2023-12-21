const readline = require("readline");
const fs = require("fs");

const path = "./file.txt";

const rl = readline.createInterface({
	input: fs.createReadStream(path),
});

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let score = 0;

rl.on("line", function (input) {
  	var oppIn = input.charAt(0);
  	var userIn = input.charAt(2);  	
  	var opp;
  	var user;

  	if(oppIn == 'A') {
  		opp = ROCK;
  		if(userIn == 'X') {
  			user = SCISSORS;
  		} else if (userIn == 'Y') {
  			user = ROCK;
  		} else if (userIn == 'Z') {
  			user = PAPER;
  		}
  	} else if (oppIn == 'B') {
  		opp = PAPER;
  		if(userIn == 'X') {
  			user = ROCK;
  		} else if (userIn == 'Y') {
  			user = PAPER;
  		} else if (userIn == 'Z') {
  			user = SCISSORS;

  		}
  	} else if (oppIn == 'C') {
  		opp = SCISSORS;
  		if(userIn == 'X') {
  			user = PAPER;
  		} else if (userIn == 'Y') {
  			user = SCISSORS;
  		} else if (userIn == 'Z') {
  			user = ROCK;
  		}
  	}

  	score += scorer(user, opp);
  	console.log (opp + " " + " " + user + "   " + " score=" + score);
}).on("close", function() {
	console.log(score);
	
});

function scorer(user, opp) {
	var cur = 0;
	if(user == ROCK) {
  		cur += 1;

  		if(opp == ROCK) {
  			cur += 3;

  		} else if(opp == PAPER) {

  		} else if (opp == SCISSORS) {
  			cur += 6;
  		}


  	} else if (user == PAPER) {
  		cur += 2;

  		if(opp == ROCK) {
  			cur += 6;

  		} else if(opp == PAPER) {
  			cur += 3;

  		} else if (opp == SCISSORS) {
  			
  		}

  	} else if (user == SCISSORS) {
  		cur += 3;

  		if(opp == ROCK) {

  		} else if(opp == PAPER) {
  			cur += 6;

  		} else if (opp == SCISSORS) {
  			cur += 3;
  		}

  	}
  	return cur;
}
