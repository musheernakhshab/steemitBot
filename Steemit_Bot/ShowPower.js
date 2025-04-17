//Import Library
const steem = require("steem");
const author = 'sharonomics';
const cofounder1 = 'sharonomics';
const wif1 = '5Jka8w1nW4yg43jiTrqJ238q4CaXhhhbueb6qvhp7EsogR1ADbR';

const cofounder2 = 'rahemanali';
const wif2 = '5K6DsKQgwkBsZ8khLdY2v92z3VaY9KuVg57k58wLVL8ovSwGXqs';

const cofounder3 = 'bitbulls';
const wif3 = '5KXKHo5mBwudoRcfAcc9NmC8YwBYe9g4CVae1Zm7xNNcgz4SAwK';

const cofounder4 = 'benadam';
const wif4 = '5JuUPTkiSzmaLrmecGYHYwucJQxm5xM47JvjgfrP2Bsm7oJnvPa';

const cofounder5 = 'prosperist';
const wif5 = '5KNq3bxCLMnTahCte2FbbQ966t4RQEb9Rad51ySGa2R1fqS7MJk';

const cofounder6 = 'musheer';
const wif6 = '5K7ANfzEQJWjZ9CZNGHLgNUb1Vv74XSqNZquNUTnYgafjs1r4i6';

const cofounder7 = 'dexmena';
const wif7 = '5Jyf6MrbEhkcqNJy5yPHTndarr6RDtpXp7hsL7bm2ffRTYaiLHc';

const cofounder8 = 'pavan26';
const wif8 = '5JC2KaxdhdLdB51tDtByW2yosmUai19JGkaFsAreTkDiXkaJSQt';

const cofounder9 = 'rxzero';
const wif9 = '5HwyJt3wu23rb94xGkV3sGsVLrdgtLNDRBEZ2E5ePMNncScxyBs';

//define last part of the address of the post
const permlink = 'propserist-xli-un-s-new-sdg-financing-strategy-for-agenda-2030';
var postid = '25';

const weight = 10000;
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "xteembot"
});


loop();
//setInterval(loop, 8000000); // Create Loop
setInterval(loop, 80000);
function loop() {
	/*-----------------------------Upvoter 1 -------------------------------------------*/
	steem.api.getAccounts([cofounder1], function (err, resultA1) { // Get Account Data
			if (err || !resultA1) { // Check for Errors
				console.log('Error loading account: ' + err); // Output Error
				return;
			}
			var secondsago1 = (new Date - new Date(resultA1[0].last_vote_time + "Z")) / 1000;
			var vpow1 = resultA1[0].voting_power + (10000 * secondsago1 / 432000);
			vpow1 = Math.min(vpow1 / 100, 100).toFixed(2);
			var timeInMss = getDateTime();
			console.log('Power wieght of ' + cofounder1 + ' at (' + timeInMss + ') : ' + vpow1);
				if(vpow1=='100.00'){
					console.log('Power wieght of ' + cofounder1 + ':' + vpow1 + '-----------------goto Upvote--------------');
				}
			});
	/*-----------------------------Upvoter 1 End-------------------------------------------*/
	/*-----------------------------Upvoter 2 -------------------------------------------*/
	steem.api.getAccounts([cofounder2], function (err, resultA2) { // Get Account Data
			if (err || !resultA2) { // Check for Errors
				console.log('Error loading account: ' + err); // Output Error
				return;
			}
			var secondsago2 = (new Date - new Date(resultA2[0].last_vote_time + "Z")) / 1000;
			var vpow2 = resultA2[0].voting_power + (10000 * secondsago2 / 432000);
			vpow2 = Math.min(vpow2 / 100, 100).toFixed(2);
			console.log('Power wieght of ' + cofounder2 + ':' + vpow2);
				if(vpow2=='100.00'){
					console.log('Power wieght of ' + cofounder2 + ':' + vpow2 + '-----------------goto Upvote--------------');
				}
			});
	/*-----------------------------Upvoter 2 End-------------------------------------------*/
	/*-----------------------------Upvoter 3 -------------------------------------------*/
	steem.api.getAccounts([cofounder3], function (err, resultA3) { // Get Account Data
			if (err || !resultA3) { // Check for Errors
				console.log('Error loading account: ' + err); // Output Error
				return;
			}
			var secondsago3 = (new Date - new Date(resultA3[0].last_vote_time + "Z")) / 1000;
			var vpow3 = resultA3[0].voting_power + (10000 * secondsago3 / 432000);
			vpow3 = Math.min(vpow3 / 100, 100).toFixed(2);
			console.log('Power wieght of ' + cofounder3 + ':' + vpow3);
				if(vpow3=='100.00'){
					console.log('Power wieght of ' + cofounder3 + ':' + vpow3 + '-----------------goto Upvote--------------');
				}
			});
	/*-----------------------------Upvoter 3 End-------------------------------------------*/	
	/*-----------------------------Upvoter 4 -------------------------------------------*/
	steem.api.getAccounts([cofounder4], function (err, resultA4) { // Get Account Data
			if (err || !resultA4) { // Check for Errors
				console.log('Error loading account: ' + err); // Output Error
				return;
			}
			var secondsago4 = (new Date - new Date(resultA4[0].last_vote_time + "Z")) / 1000;
			var vpow4 = resultA4[0].voting_power + (10000 * secondsago4 / 432000);
			vpow4 = Math.min(vpow4 / 100, 100).toFixed(2);
			console.log('Power wieght of ' + cofounder4 + ':' + vpow4);
				if(vpow4=='100.00'){
					console.log('Power wieght of ' + cofounder4 + ':' + vpow4 + '-----------------goto Upvote--------------');
				}
			});
	/*-----------------------------Upvoter 4 End-------------------------------------------*/
	/*-----------------------------Upvoter 5 -------------------------------------------*/
	steem.api.getAccounts([cofounder5], function (err, resultA5) { // Get Account Data
			if (err || !resultA5) { // Check for Errors
				console.log('Error loading account: ' + err); // Output Error
				return;
			}
			var secondsago5 = (new Date - new Date(resultA5[0].last_vote_time + "Z")) / 1000;
			var vpow5 = resultA5[0].voting_power + (10000 * secondsago5 / 432000);
			vpow5 = Math.min(vpow5 / 100, 100).toFixed(2);
			console.log('Power wieght of ' + cofounder5 + ':' + vpow5);
				if(vpow5=='100.00'){
					console.log('Power wieght of ' + cofounder5 + ':' + vpow5 + '-----------------goto Upvote--------------');
				}
			});
	/*-----------------------------Upvoter 5 End-------------------------------------------*/
	/*-----------------------------Upvoter 6 -------------------------------------------*/
	steem.api.getAccounts([cofounder6], function (err, resultA6) { // Get Account Data
			if (err || !resultA6) { // Check for Errors
				console.log('Error loading account: ' + err); // Output Error
				return;
			}
			var secondsago6 = (new Date - new Date(resultA6[0].last_vote_time + "Z")) / 1000;
			var vpow6 = resultA6[0].voting_power + (10000 * secondsago6 / 432000);
			vpow6 = Math.min(vpow6 / 100, 100).toFixed(2);
			console.log('Power wieght of ' + cofounder6 + ':' + vpow6);
				if(vpow6=='100.00'){
					console.log('Power wieght of ' + cofounder6 + ':' + vpow6 + '-----------------goto Upvote--------------');
				}
			});
	/*-----------------------------Upvoter 6 End-------------------------------------------*/
	/*-----------------------------Upvoter 7 -------------------------------------------*/
	steem.api.getAccounts([cofounder7], function (err, resultA7) { // Get Account Data
			if (err || !resultA7) { // Check for Errors
				console.log('Error loading account: ' + err); // Output Error
				return;
			}
			var secondsago7 = (new Date - new Date(resultA7[0].last_vote_time + "Z")) / 1000;
			var vpow7 = resultA7[0].voting_power + (10000 * secondsago7 / 432000);
			vpow7 = Math.min(vpow7 / 100, 100).toFixed(2);
			console.log('Power wieght of ' + cofounder7 + ':' + vpow7);
				if(vpow7=='100.00'){
					console.log('Power wieght of ' + cofounder7 + ':' + vpow7 + '-----------------goto Upvote--------------');
				}
			});
	/*-----------------------------Upvoter 7 End-------------------------------------------*/
	/*-----------------------------Upvoter 8 -------------------------------------------*/
	steem.api.getAccounts([cofounder8], function (err, resultA8) { // Get Account Data
			if (err || !resultA8) { // Check for Errors
				console.log('Error loading account: ' + err); // Output Error
				return;
			}
			var secondsago8 = (new Date - new Date(resultA8[0].last_vote_time + "Z")) / 1000;
			var vpow8 = resultA8[0].voting_power + (10000 * secondsago8 / 432000);
			vpow8 = Math.min(vpow8 / 100, 100).toFixed(2);
			console.log('Power wieght of ' + cofounder8 + ':' + vpow8);
				if(vpow8=='100.00'){
					console.log('Power wieght of ' + cofounder8 + ':' + vpow8 + '-----------------goto Upvote--------------');
				}
			});
	/*-----------------------------Upvoter 8 End-------------------------------------------*/
	/*-----------------------------Upvoter 9 -------------------------------------------*/
	steem.api.getAccounts([cofounder9], function (err, resultA9) { // Get Account Data
			if (err || !resultA9) { // Check for Errors
				console.log('Error loading account: ' + err); // Output Error
				return;
			}
			var secondsago9 = (new Date - new Date(resultA9[0].last_vote_time + "Z")) / 1000;
			var vpow9 = resultA9[0].voting_power + (10000 * secondsago9 / 432000);
			vpow9 = Math.min(vpow9 / 100, 100).toFixed(2);
			console.log('Power wieght of ' + cofounder9 + ':' + vpow9);
				if(vpow9=='100.00'){
					console.log('Power wieght of ' + cofounder9 + ':' + vpow9 + '-----------------goto Upvote--------------');
				}
			});
	/*-----------------------------Upvoter 9 End-------------------------------------------*/
	function getDateTime() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
}
} //loop end
