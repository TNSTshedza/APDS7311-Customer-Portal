import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/RegisterForm.css';

const RegisterForm = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  // Client-side validation rules
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateForm = () => {
    if (!usernameRegex.test(formData.username)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Username',
        text: 'Username can only contain alphanumeric characters.',
      });
      return false;
    }
    if (!passwordRegex.test(formData.password)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Password must be at least 8 characters long, contain uppercase, number, and special character.',
      });
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
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You can now log in.',
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          switchToLogin(); // Automatically switch to login after success
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'Please try again.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Please check your input and try again.',
      });
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
