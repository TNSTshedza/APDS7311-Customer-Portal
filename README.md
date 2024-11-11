Customer International Payments Portal
This project is a secure web application that allows customers to register, log in, and make international payments. The project focuses on implementing secure practices, including HTTPS for secure data transmission, password hashing and salting, and input validation to protect against common security threats.

Table of Contents
Project Overview
Features
Technologies Used
Setup and Installation
Usage
Security Measures
Screenshots
License
Project Overview
The Customer International Payments Portal is designed to provide a secure online platform for users to make payments internationally. Users can register, log in, and securely enter payment information with protection from common security threats.

Features
User Registration and Login: Secure user authentication with form validation and error handling.
Payment Form: Allows users to enter international payment details, including SWIFT code, amount, currency, and beneficiary name.
Client-Side Validation: Ensures data integrity before submission.
Error Handling: Displays appropriate error messages to guide users.
Technologies Used
Frontend: React, Axios, SweetAlert2 for UI feedback
Backend: Node.js, Express
Security: bcrypt for password hashing, rate limiting to prevent brute-force attacks, and helmet for secure headers
Protocol: HTTPS with SSL/TLS for secure data transmission
Setup and Installation
Prerequisites
Node.js and npm installed on your machine
SSL certificates (server.key and server.cert) for HTTPS support
Steps
Clone the Repository

bash
Copy code
git clone https://github.com/TNSTshedza/APDS7311-Customer-Portal.git
cd Customer-International-Payments-Portal
Install Dependencies Go to both frontend and backend directories to install the dependencies.

bash
Copy code
cd frontend
npm install
cd ../backend
npm install
Start the Backend Server Run this command from the backend directory to start the server with HTTPS.

bash
Copy code
npm start
Start the Frontend Server Open a new terminal, go to the frontend directory, and start the frontend server.

bash
Copy code
npm start
Access the Application Open your browser and go to https://localhost:3000 to access the portal.

Usage
Registration: Users can register by providing a unique username and a secure password.
Login: Registered users can log in by entering their credentials.
Payments: After logging in, users can fill out the payment form with the required details and submit it.
Security Measures
This project implements several security best practices to protect user data and application integrity:

Password Hashing and Salting: User passwords are hashed with bcrypt to prevent plain-text storage.
Rate Limiting: Implemented on login and registration routes to prevent brute-force attacks.
Input Validation: Frontend and backend validation checks for username and password requirements.
HTTPS with SSL/TLS: All data is encrypted in transit with HTTPS, ensuring confidentiality.
Helmet: Adds various HTTP headers to secure the application.
Screenshots
Backend Server Running
[Insert Screenshot of Backend Server Running on HTTPS]

User Registration
[Insert Screenshot of Successful Registration or Error Messages for Invalid Inputs]
![image](https://github.com/user-attachments/assets/77898b4d-cadd-49e6-b7ad-15023b994f4e)


User Login
[Insert Screenshot of Successful Login or Error Messages for Incorrect Inputs]
![image](https://github.com/user-attachments/assets/718bfed5-ace9-469f-bba4-6ec7d6eab760)


Payment Form
[Insert Screenshot of Payment Form with Valid Input or Error Handling]

License
This project is licensed under the MIT License. See the LICENSE file for details.

Notes
Make sure your backend server is running on HTTPS to avoid issues with mixed content in browsers.
For demonstration purposes, the backend uses an array for data storage; a production environment should use a secure database.
Adjust CORS settings if deploying to a different origin.
