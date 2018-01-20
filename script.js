var fs = require('fs');
var https = require('https');


fs.writeFile(__dirname + "/test.html", "<h1>test</h1>", function(error) {
	if (error) {		
		return console.log(error);
	} else {
		return console.log("test")
	}
})

var myPhotoLocation = 'https://images.unsplash.com/photo-1489834974324-a6b697efa29a?auto=format&fit=crop&w=1506&q=80'

https.get(myPhotoLocation, function(response) {
	response.pipe(fs.createWriteStream(__dirname + "/test.jpg"))


});