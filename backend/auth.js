const bcrypt = require('bcryptjs');
const users = []; // Simulating a database for now

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  // Server-side validation for username and password
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!username || !password || !usernameRegex.test(username) || !passwordRegex.test(password)) {
    return res.status(400).json({ message: 'Invalid username or password.' });
  }

  // Hashing the password
  const hashedPassword = await bcrypt.hash(password, 12);
  users.push({ username, password: hashedPassword });

  return res.status(201).json({ message: 'User registered successfully' });
};

module.exports = { registerUser };
