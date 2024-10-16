"use strict";

var bcrypt = require('bcryptjs');

var users = []; // Simulating a database for now

var registerUser = function registerUser(req, res) {
  var _req$body, username, password, usernameRegex, passwordRegex, hashedPassword;

  return regeneratorRuntime.async(function registerUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password; // Server-side validation for username and password

          usernameRegex = /^[a-zA-Z0-9]+$/;
          passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

          if (!(!username || !password || !usernameRegex.test(username) || !passwordRegex.test(password))) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Invalid username or password.'
          }));

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 12));

        case 7:
          hashedPassword = _context.sent;
          users.push({
            username: username,
            password: hashedPassword
          });
          return _context.abrupt("return", res.status(201).json({
            message: 'User registered successfully'
          }));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  registerUser: registerUser
};
//# sourceMappingURL=auth.dev.js.map
