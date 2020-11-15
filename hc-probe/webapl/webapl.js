const { response } = require('express');
const express = require('express');
const app = express();
let start = Date.now();

// handler of Liveness probe
// ~40sec from launch: returns 200 OK
// later: returns 500 (Liveness probe will fail and restart container)
app.get('/healthz', function(request, response) {
  let msec = Date.now() - start;
  let code = 200;
  if (msec > 40000) {
    code = 500;
  }
  console.log('GET /health ' + code);
  response.status(code).send('OK');
});

// handler of Rediness
// 20secs form start treated as initialization time
// returns status 500 and later returns 200
app.get('/ready', function(request, response) {
  let msec = Date.now() - start;
  let code = 500;
  if (msec > 20000) {
    code = 200
  }
  console.log('GET /ready ' + code);
  response.status(code).send('OK');
});

// page top
app.get('/', function() {
  console.log('GET /');
  response.send('Hello form Node.js');
});

// port
app.listen(3000);
