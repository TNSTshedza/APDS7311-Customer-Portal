const https = require('https');
const fs = require('fs');
const express = require('express');
const { registerUser } = require('./auth');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Use security middleware
app.use(helmet()); // Protect against common vulnerabilities
app.use(cors({ origin: 'http://localhost:3000' })); // Allow only requests from the frontend
app.use(bodyParser.json());

// Rate Limiter Middleware for preventing DDoS and brute force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Register route
app.post('/register', registerUser);

const PORT = process.env.PORT || 5000;

// Read SSL certificate and key
const httpsOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
};

// Create an HTTPS server
https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
