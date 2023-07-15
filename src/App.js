import React from 'react';
import SignupForm from './SignupForm';
import './App.css'; // Add a CSS file for styling


const App = () => {
  return (
    <div className="app-container">
      <div className="image-container">
        <div className="image-heading">
          <h2>Find 3D Object,Mocks <br/> and illustration  here</h2>
        </div>
        <div className="image-wrapper">
          <img src="3.png" alt="Signup" />
        </div>
      </div>
      <div className="form-container">
        <div className="Heading"><h1>Create Account</h1>
        </div>
        <div className="g-f-div">
          <div className="logo">
          <img src="2.png" alt="Signup" />
          <p>Signup With Google</p>
          </div>
          <div className="logo">
          <img src="1.png" alt="Signup" />
          <p>Signup With acebook</p>
          </div>
          


        </div>
        <div>
          <img src="4.png" alt="Signup" />
          </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default App;
