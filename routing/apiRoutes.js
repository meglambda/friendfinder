
var friendData = require("../data/friends");

module.exports = function(app){
	

app.get("/api/friends", function(req, res){
		res.json(friendData);
	});


app.post("/api/friends", function(req, res){
	// for(var i=0; i<req.body["data[]"]; i++){
	// 	req.body["data[]"][i] = parseInt(req.body["data[]"][i]);
	// }
	var mostSimiliarFriend = {};
	var mostSimilarScore = 1000;
	for(var i=0; i<friendData.length; i++){
		var similiarScore = 0;
		for(var j=0; j < friendData[i].data; j++){
			similiarScore += Math.abs(friendData[i].data[j] - req.body.data[j])
		}if (similiarScore < mostSimilarScore) {
			mostSimilarScore = similiarScore; 
			mostSimiliarFriend = friendData[i];
		}

	}
	friendData.push(req.body);
	res.json(mostSimiliarFriend);
});

console.log(friendData);


}