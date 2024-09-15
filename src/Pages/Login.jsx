import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  // Function to toggle between Login and Sign Up
  const toggleState = () => {
    setCurrentState(currentState === "Login" ? "Sign Up" : "Login");
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form submitted');
    // Add logic for form submission here
  };

  return (
    <div className='flex items-center justify-center '>
      <div className='flex flex-col items-center justify-center w-full sm:w-[28%] gap-5 mt-12'>

        {/* Title and underline */}
        <div className="flex flex-col gap-1 mb-3">
          <div className="flex gap-2 items-center">
            <p className="text-2xl prata sm:text-3xl font-medium">{currentState}</p>
            <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
          </div>
        </div>

        {/* Form Fields */}
        <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
          {currentState === "Sign Up" && (
            <input
              className='border border-gray-500 px-2 py-2 text-base'
              type="text"
              placeholder='Name'
            />
          )}
          <input
            className='border border-gray-500 px-2 py-2 text-base'
            type="text"
            placeholder='Email'
          />
          <input
            className='border border-gray-500 px-2 py-2 text-base'
            type="password"
            placeholder='Password'
          />

          {/* Submit Button */}
          <button type="submit" className='mt-2 w-full bg-black text-white px-4 py-3 '>
            {currentState === "Login" ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Links */}
        <div className='flex items-center justify-between w-full'>
          {currentState === "Login" && <p className='text-black cursor-pointer'>Forgot password?</p>}
          <p
            className='text-black cursor-pointer'
            onClick={toggleState}
          >
            {currentState === "Login" ? "Create account" : "Already have an account?"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
