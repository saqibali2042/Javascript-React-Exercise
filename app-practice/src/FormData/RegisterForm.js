
import React from 'react';





// Create a new FormData object
const formData = new FormData();

// Get the form element
const form = document.getElementById('registerForm');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get the form inputs
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Add the form data to the FormData object
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('email', email);
  formData.append('password', password);

  // Send the form data to the server
  fetch('/api/register', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
});

const RegisterForm = () => {
    return (
        <div>
        <h1>Register Form</h1>
        <form id="registerForm">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
    }

export default RegisterForm;
