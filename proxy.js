let express = require('express'); 
let request = require('request'); 
let app = express(); 

app.use('/', function(req, res) { 
	var url = "https://www.baidu.com/" + req.url; 
	req.pipe(request(url)).pipe(res); 
}); 

app.listen(process.env.PORT || 3000);
console.log('Server listening on http://localhost:3000');
