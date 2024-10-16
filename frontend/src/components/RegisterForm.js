import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegisterForm.css';

const RegisterForm = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  // Client-side validation rules
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateForm = () => {
    if (!usernameRegex.test(formData.username)) {
      setMessage('Username can only contain alphanumeric characters.');
      return false;
    }
    if (!passwordRegex.test(formData.password)) {
      setMessage('Password must be at least 8 characters long, contain uppercase, number, and special character.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      if (response.status === 201) {
        setMessage('Registration successful! You can now log in.');
        setTimeout(switchToLogin, 2000); // Automatically switch to login after success
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('Registration failed. Please check your input and try again.');
    }
  };

  return (
    <div className="container">
      <div className="login form">
        <header>Register</header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <input type="submit" className="button" value="Signup" />
        </form>
        <p>{message}</p>
        <div className="signup">
          <span className="signup">
            Already have an account?{' '}
            <label style={{ cursor: 'pointer' }} onClick={switchToLogin}>
              Login
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
