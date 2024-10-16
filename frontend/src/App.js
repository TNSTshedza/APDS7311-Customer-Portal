import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import PaymentForm from './components/PaymentForm';
// import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('register'); // Default to 'register' page
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track login status

  // Handle successful login (update the state to reflect login)
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('payment'); // After successful login, show the payment form
  };

  return (
    <div className="App">
      <h1>Customer International Payments Portal</h1>

      {/* Show registration form */}
      {currentPage === 'register' && (
        <>
          <RegisterForm switchToLogin={() => setCurrentPage('login')} />
        </>
      )}

      {/* Show login form */}
      {currentPage === 'login' && !isAuthenticated && (
        <>
          <LoginForm onLoginSuccess={handleLoginSuccess} switchToRegister={() => setCurrentPage('register')} /> {/* Pass switchToRegister */}
        </>
      )}

      {/* Show payment form after login */}
      {currentPage === 'payment' && isAuthenticated && <PaymentForm />}
    </div>
  );
}

export default App;
