import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.email) {
      validationErrors.email = 'Error: Email is required.';
    }

    if (!formData.name) {
      validationErrors.name = 'Error: Name is required.';
    }

    if (!formData.password) {
      validationErrors.password = 'Error: Password is required.';
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = 'Error: Confirm password is required.';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Error: Passwords do not match.';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform further actions (e.g., API calls, etc.)
      setSuccessMessage('Successfully Created !');

      console.log('Form submitted:', formData);
    }
    else{
      setSuccessMessage('');

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder='Enter Name'
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder='Enter Password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder='Enter Confirm Password'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Account</button>
      <div className="error-container">
      {successMessage && <p className="success-message">{successMessage}</p>}
          {Object.keys(errors).map((key) => (
            <p key={key} className="error-message">
              {errors[key]}
            </p>
          ))}
        </div>
    </form>
  );
};

export default SignupForm;
