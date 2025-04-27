import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Invalid email format';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
    const handleLogin = () => {
      // your login logic
      navigate('/patientdashboard');
    };
  
    return (
      <button onClick={handleLogin}>LOGIN</button>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      localStorage.setItem('userToken', 'dummyToken'); 
      toast.success('Login successful!', {
        position: 'top-center',
        autoClose: 2000,
      });


      setTimeout(() => {
        navigate('/'); 
      }, 1500);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-96">
        <div className="bg-purple-600 rounded-t-xl p-4 text-white text-center">
          <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4m-2 2h12" />
            </svg>
            <span className="text-lg font-semibold">Patient System</span>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center text-purple-700">
            LOGIN to your Account
          </h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={`shadow appearance-none border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-purple-400`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`shadow appearance-none border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-purple-400`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-purple font-bold py-2 px-4 rounded-lg w-full"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;

