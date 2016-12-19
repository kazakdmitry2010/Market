var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8000);
console.log('server up ctr+C to down');