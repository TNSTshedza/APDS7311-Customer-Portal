"use strict";

var https = require('https');

var fs = require('fs');

var express = require('express');

var _require = require('./auth'),
    registerUser = _require.registerUser;

var bodyParser = require('body-parser');

var cors = require('cors');

var helmet = require('helmet');

var rateLimit = require('express-rate-limit');

var app = express(); // Use security middleware

app.use(helmet()); // Protect against common vulnerabilities

app.use(cors({
  origin: 'http://localhost:3000'
})); // Allow only requests from the frontend

app.use(bodyParser.json()); // Rate Limiter Middleware for preventing DDoS and brute force attacks

var limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs

});
app.use(limiter); // Register route

app.post('/register', registerUser);
var PORT = process.env.PORT || 5000; // Read SSL certificate and key

var httpsOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}; // Create an HTTPS server

https.createServer(httpsOptions, app).listen(PORT, function () {
  console.log("Server running on https://localhost:".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
