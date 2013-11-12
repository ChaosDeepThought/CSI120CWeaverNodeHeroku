var express = require('express');
var app = express();

app.get('/', function(req, res){
"name" : "Charles Weaver",
"vacation" : {
	"places": ["24.547123,-78.004646", "10.25006,-83.829117", "27.839076,-81.745148"];
	}
});

var port = process.env.PORT || 5000;
app.listen(port);