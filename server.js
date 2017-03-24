var express = require('express');
var cfenv = require('cfenv');
var bodyParser = require('body-parser');

var appEnv = cfenv.getAppEnv();
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('appName', 'simple-bluemix-dev');
app.set('port', appEnv.port);

var router = express.Router();
router.get('/cfenv', function(req, res){
  res.set('Content-Type', 'text/plain');
  res.send(appEnv);
});

app.use(router);

app.listen(app.get('port'), function(){
  console.log('Listen port: ' + app.get('port'));
})