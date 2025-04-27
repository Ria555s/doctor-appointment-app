import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.contact || !formData.email || !formData.password) {
      toast.error("All fields are required");
      return;
    }

    // simulate success
    toast.success("Account created! Now log in to your account", );
    setTimeout(() => navigate("/Signup"), 2000);
  };

  const handleGoogleSignup = () => {
    toast.info("Google signup coming soon");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
    <div className="bg-purple rounded-lg shadow-xl p-8 w-96 mx-auto mt-16">
      <div className="bg-purple-600 rounded-t-lg p-4 text-white text-center">
        <div className="flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4m-2 2h12" />
          </svg>
          <span className="text-lg font-semibold">Create Your Account</span>
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
          </div>

          <button type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded w-full mb-3">
            SIGN UP
          </button>

          <button type="button"
            onClick={handleGoogleSignup}
            className="bg-purple-600 hover:bg-purple-700 text-black font-bold py-2 px-4 rounded w-full">
            Sign up with Google
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-black-500">
          Already have an account? <a href="/login" className="text-purple-600 font-bold hover:underline">Log in here</a>
        </p>
      </div>

      <ToastContainer position="top-center" />
    </div>
    </div>
  );
}

export default Signup;
