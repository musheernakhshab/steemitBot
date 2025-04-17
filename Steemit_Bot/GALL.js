//Import Library
const steem = require("steem");
//define your username
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "xteembot"
});
var arr = [
	['5Jka8w1nW4yg43jiTrqJ238q4CaXhhhbueb6qvhp7EsogR1ADbR', 'sharonomics', '1'],
	['5JuUPTkiSzmaLrmecGYHYwucJQxm5xM47JvjgfrP2Bsm7oJnvPa', 'benadam', '1'],
	['5JC2KaxdhdLdB51tDtByW2yosmUai19JGkaFsAreTkDiXkaJSQt', 'pavan26', '1'], 
	['5K2wEKndWq4av8DQD2za2vQqvmFidGyso2vxX6G29qvwbsgMVro', 'xias', '1'],
	['5Hw7ECMHcWcMctUsUaynLQPFMwDJ6uZNnsaHy8Bb2pmpEWuNEkH', 'agrow', '1'], 
	['5JEf6ppNRFV6fE6u47G6cwwWyX1nR8zFDJAPMiVfkAR85JpyhD4', 'biox', '1'], 
	['5Km1Wh9HfpCUiDsHCP4UC6bPU6LReDMXG9hMie5p5G3QBufW1mG', 'myxeno', '1'],
	['5KV1xbpTPGCzuJdEQA4b1YSdgpySM8Lo5ZN4sANkFuTqqyQhEF4', 'zeromile', '1'], 
	['5JTV8pQhgPzXrQ6JarfRj7TZayaUR1DYuEUAs2qZMgoqMeYffzg', 'tabassumusheer', '1'],
	['5JhDyKgaCFCsqmcPNaUKEQxkvv21yEAXQZqPoauEPnVuPFWTkJY', 'singhlakhbir', '1'],
	['5JyBJ9FFPFkRdJChZLc1p9JFFbbnFH99uqRW7cevxUW8uU8DGLN', 'anmolwadbudhe', '1'],
	['5Kiwcok25hJnpPoaZ6GjQreTBzRTYiFvncK1WkyBYyZAZgfnnnu', 'arsd', '1'],
	['5JLWvyqtGxdRaSZe7idyZTx8MUqbJy3jE6S8vPHQpZGvukM2iWH', 'sadiyakhan069', '1'],
	['5JzkGK6NbmHMdKUwtu25dfqBMFxjukSQGyFazKYDLaVzPE3XSK8', 'dkatole', '1'],
	['5KNq3bxCLMnTahCte2FbbQ966t4RQEb9Rad51ySGa2R1fqS7MJk', 'prosperist', '2'],	
	['5KXKHo5mBwudoRcfAcc9NmC8YwBYe9g4CVae1Zm7xNNcgz4SAwK', 'bitbulls', '2'],
	['5JDs7J7raS4H5aJk515eraotQvregfkvA24fDc3jqwF9FoKncyx', 'nazishnaz', '2'],
	['5HwyJt3wu23rb94xGkV3sGsVLrdgtLNDRBEZ2E5ePMNncScxyBs', 'rxzero', '2'],
	['5JpcZPDC97RLe1EN3UXXH9mpMCq5aWgaBZQqvYKBzQzRvArhEDy', 'alnida', '2'], 
	['5K94Tn2MVNiwAqJP6Gjv74aRo5WgbvfRenfiJgYmWxvorVG1ZTe', 'crowdocracy.com', '2'],  
	['5HrAqNC7LCMyH7CNxdHYAPEcv9xRdjigbrbbSX4PQkJnhxRGW2C', 'redoxer', '2'],
	['5JSQXzZ5GN7SeNwpzEYqGCD9vpFVxqLmn1gYL98qVcoBqH4WToL', 'zeroc', '2'], 
	['5JhQXMkhbLJktr8Lq8rREHk9x32m8drEM2MNxVzLNGZKd1WVbiU', 'hammadmehdee', '2'], 
	['5Hu8JVXfiF2pVng9Xdv3tNi8R1sX14o8uojGEdrUJwwnC83EoyG', 'jeetbhowmik', '2'], 
	['5JH4q43mQn9bMsFdp1aLk1oy2f77mU9xRgV2yVX1AS82F8uAgEb', 'technohubtbi', '2'],
	['5Hyun8UpSeRW7EjmwW1XjFJa4FuVnyCCstAyakm4gCDDo7gEXKX', 'abdulkalam', '2'],
	['5Kk2xKcvxBo1NcKkiDXxVwT2RxbpASPEDVPvaSXw8i7pDDQjrbd', 'nida0417', '2'],
	['5Jyf6MrbEhkcqNJy5yPHTndarr6RDtpXp7hsL7bm2ffRTYaiLHc', 'dexmena', '3'],
	['5K7ANfzEQJWjZ9CZNGHLgNUb1Vv74XSqNZquNUTnYgafjs1r4i6', 'musheer', '3'],
	['5K6DsKQgwkBsZ8khLdY2v92z3VaY9KuVg57k58wLVL8ovSwGXqs', 'rahemanali', '3'],
	['5Hw7ECMHcWcMctUsUaynLQPFMwDJ6uZNnsaHy8Bb2pmpEWuNEkH', 'agrow', '3'],
	['5JpcZPDC97RLe1EN3UXXH9mpMCq5aWgaBZQqvYKBzQzRvArhEDy', 'alnida', '3'], 
	['5KN48eQbdYbMVuy4aUPq3e3SGZ8TXGoRTBLFuXNLEoWf3W1gBh2', 'autonio', '3'], 
	['5KL45KaLwKdZ5T77rbjTfq5tj8uukZ96aD9yB5DYrLFxkKq7UVK', 'drovi', '3'],
	['5JzCUVQLB5VjLLSvQcNWo7Xe3LkGtaojcEpqLZwnh3KTAxsMPSF', 'sdg1', '3'],
	['5Hpk1zHimqHmiAVw8fxdFQzmwQCD31qobJUeBi9txRdc7mb7PkM', 'zerocash', '3'],
	['5Hz5HJnoXzr4AP1fBRJiSQyzJmehTuYUgLuzhBsvixPLVjd61Pe', 'bilali', '3'], 
	['5Jj1ykdFQK5FcAo3beujchqr6WPHck1knc4iiawc9spRy831xYS', 'frayan', '3'], 
	['5HrTDJxRG1qpKeUqKKXc48DnhKFydkGEq7QPKQ1wLmvQSvuaf2b', 'sanyukta', '3'],
	['5KUi75PkjvV8BiSQUfPpzM1bUvy1CqyWub1qDDp7SUM2A47L8CM', 'nakhshab', '3'],
	['5KF5vJb578j7oBjuRKUGNwRdnHeTepwkeFgkjXKoz1bAp9apTim', 'sweetarshi', '3'],
	['5JZTUwcNCmTMNPBnwddV1HGxDdmhMcGcQp8hcUdKtGNMksDohGc', 'fouziyakhwaja', '3'],
]
const weight = 10000;
//define limit:mai
//const limit = 5;
//const callback = null;
//var grp = '3';
var pauthor ='';
var ppermlink='';
function Upvote(wif, acc, grp) {
	try{
					con.connect(function(err) {
					  //if (err) throw err;
						con.query("SELECT sAuthor, sPermlink FROM `tbl_pupvote` WHERE (nGroup = ? AND nStatus = 0) limit 0,1", grp, function (err, resultS1, fields) {
						//if (err) throw err;
						if(resultS1.length > '0')
						{
							console.log('Post Author :' + resultS1[0].sAuthor);
							console.log('Post PermLink :' + resultS1[0].sPermlink);
							
							steem.broadcast.vote(wif, acc, resultS1[0].sAuthor, resultS1[0].sPermlink, weight, function(err, resultV1) {
							console.log(err, resultV1);
							if(resultV1)
							{
								var status1 ='1';
								pauthor = resultS1[0].sAuthor;
								ppermlink = resultS1[0].sPermlink;
								con.query('UPDATE tbl_pupvote SET nStatus = ? WHERE sAuthor = ? AND sPermlink = ?', [status1, pauthor, ppermlink], function (error, resultsU1, fields) {
								if (error) {
								  console.log("error", error);
								}
								else if(resultsU1)
								{
									console.log("database updated after upvote");
								}
								});
							}
							else{
								var status1 ='1';
								pauthor = resultS1[0].sAuthor;
								ppermlink = resultS1[0].sPermlink;
								con.query('UPDATE tbl_pupvote SET nStatus = ? WHERE sAuthor = ? AND sPermlink = ?', [status1, pauthor, ppermlink], function (error, resultsU1, fields) {
								if (error) {
								  console.log("error", error);
								}
								else if(resultsU1)
								{
									console.log("database update because Its already Upvoted.");
								}
								});
							}
							});
						}
						else{
							console.log('Dont have post by upvote ' +acc+' Error :' + err);
						}
					  });
					});
	}
	catch (err) {
	console.log("catch", err);
			}
}

loop();
//setInterval(loop, 8000000); // Create Loop
setInterval(loop, 80000);
function loop() {
arr.forEach(function(el, index) {
  // Could also use `arr[index]` instead of el
  Upvote.apply(this, el);
  //ResteemPost.apply(this, el);
});
}
