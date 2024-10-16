import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Payment.css';  // You can style it later

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    swiftCode: '',
    amount: '',
    currency: '',
    beneficiaryName: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can add more validations here
    if (formData.amount <= 0) {
      setMessage('Amount must be greater than zero');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/payment', formData);
      setMessage(`Payment processed successfully. Transaction ID: ${response.data.transactionId}`);
    } catch (error) {
      setMessage('Payment failed. Please check your details.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Make a Payment</h2>

      <div className="form-group">
        <label>Beneficiary Name:</label>
        <input
          type="text"
          value={formData.beneficiaryName}
          onChange={(e) => setFormData({ ...formData, beneficiaryName: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label>SWIFT Code:</label>
        <input
          type="text"
          value={formData.swiftCode}
          onChange={(e) => setFormData({ ...formData, swiftCode: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label>Amount:</label>
        <input
          type="number"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label>Currency:</label>
        <input
          type="text"
          value={formData.currency}
          onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
          required
        />
      </div>

      <button type="submit">Submit Payment</button>
      <p>{message}</p>
    </form>
  );
};

export default PaymentForm;
