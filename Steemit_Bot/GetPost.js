//Import Library
const steem = require("steem");
//define a/c
var arr = [
	['chinadaily', '1'],
['knozaki2015', '1'],
['papa-pepper', '1'],
['roelandp', '1'],   
['adnanrabbani', '1'], 
['miroslavrc', '1'],   
['onyechi', '1'],
['slowwalker', '1'],
['steemsports', '1'],
['adsactly', '1'],                       
['gooddream', '1'],   
['kingscrown', '1'],  
['eveuncovered', '1'],   
['onepercentbetter', '1'],
['me-tarzan', '3'],
['cryptopassion', '1'],   
['exyle', '1'],   
['acidyo', '1'],    
['cheetah', '1'],   
['aggroed', '1'],   
['doitvoluntarily', '1'],
['moon32walker', '1'], 
['theaustrianguy', '1'],
['homeartpictures', '1'],
['cryptoclick', '1'],
['rubencress', '1'],
['miti', '1'],
['hannahwu', '1'],
['kommienezuspadt', '1'],
['bobaphet', '1'],
['cadawg', '1'],
['whitelightxpress', '1'],
['olga.maslievich', '1'],
['ijedon', '1'],
['softmetal', '1'],
['karenb54', '1'],
['rs-farhan', '1'],
['davidpakman', '1'],
['chekohler', '1'],
['pipoune', '1'],
['cervantes', '2'],
['florian-glechner', '2'],
['marketreport', '2'],
['healthexpert', '2'],               
['travelfeed', '2'],
['weitblicker', '2'],
['always1success', '2'],        
['stef1', '2'],
['brittandjosie', '2'],        
['xpilar', '2'],
['arslan.saleem', '2'],         
['mariannewest', '2'],        
['goldkey', '2'],         
['ocd', '2'],    
['themarkymark', '2'],   
['honeybee', '2'],   
['deanliu', '2'],   
['opheliafu', '2'], 
['beastlybanter', '2'],       
['travelgirl', '2'],   
['future24', '2'],           
['jrcornel', '2'],   
['dobartim', '2'],                 
['krnel', '2'],               
['czechglobalhosts', '2'],         
['gavvet', '2'],
['welshstacker', '2'],
['goldmatters', '2'],
['hallmann', '2'],
['belemo', '2'],
['hallmann', '2'],
['indextrader24', '2'],
['fotostef', '2'],
['brian.rrr', '2'],
['ashtv', '2'],
['cervantes', '3'],
['bala41288', '3'],
['love568686', '3'],
['paulag', '3'],
['derangedvisions', '3'],
['ammar0344', '3'],
['borjan', '3'],
['shaka', '3'],
['tarazkp', '3'],                  
['stackin', '3'],
['sauravrungta', '3'], 
['broncnutz', '3'],               
['joythewanderer', '3'],          
['oldstone', '3'],                
['taskmaster4450', '3'],          
['hilarski', '3'],
['stephenkendal', '3'],         
['virus707', '3'],                 
['bitrocker2020', '3'],            
['daveks', '3'],         
['axeman', '3'],
['steemillu', '3'],
['watersnake101', '3'],
['zaku', '3'],
['axeman', '3'],
['cateredcontent', '2'],
['originalworks', '1'],
['neoxian-city', '1'],
['realmankwon', '2'],
['shoemanchu', '2'],
['homesteaderscoop', '3'],
['raah', '3']
['etcmike', '3'],
['gandhibaba', '3'],
['stortebeker', '3'],
['zirochka', '3'],
['maxwellmarcusart', '3'],
['enjar', '3'],
['watersnake101', '3'],
['phoneinf', '3'],
['thegreens', '3'],
['senorcoconut', '3']
]
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "xteembot"
});
function UpvotePost(username, grp){
	try{
        steem.api.getDiscussionsByBlog({tag: username, limit: 1}, function(err, result){
            const json = JSON.stringify(['reblog', {
            }]);
			//console.log(result[0].author, result[0].permlink)
            steem.api.getContent(result[0].author, result[0].permlink, function(err, post) {
			  var created_days_ago = Math.ceil(
				(Date.now() - Date.parse(post.created))
				//Date.parse(post.created)
			  );
			  console.log('The post: ' + post.title);
			  if (created_days_ago < 20110718) {
				console.log('Have some time ' + (created_days_ago) + ' minutes.----------------------------------------/');
			  } else {
				 if(created_days_ago > 21583372) {
				console.log('Post is older than 30minutes');
				 }else{
					 con.query('SELECT * FROM tbl_pupvote WHERE (sAuthor =? AND sPermlink=? AND nGroup=?)', [result[0].author, result[0].permlink, grp], function (error, resultsq, fields){
						 if (error) {
								  console.log("error", error);
								}else if (resultsq.length > 0) {
									console.log("post entry exist in database.");
								}else{
									/*post entry*/
				var que =  "INSERT INTO tbl_pupvote (sAuthor, sPermlink, nGroup) VALUES ('" + result[0].author + "', '" + result[0].permlink + "', '" + grp + "')";
									 con.query(que, function (err, result) {
									  if (err) {
										console.log(err);
									  }
									  if (result) {
										 console.log("--------------------data inserted---------------------------");
									  }
									});
									/*post entry end*/
								}
					 });
				 }
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
  UpvotePost.apply(this, el);
});

var timeInMss = getDateTime();
			console.log('Loop timing : ' + timeInMss);
}
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