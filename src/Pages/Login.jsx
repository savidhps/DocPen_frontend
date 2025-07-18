import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../services/allapi';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin =async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      Swal.fire({
        title: 'Missing Fields!',
        text: 'Please fill in both email and password.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    } else {
      const result = await loginApi({ email, password })
      console.log(result);
      if (result.status == 200) {
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)
        Swal.fire({
          title: 'Login Successful!',
          text: 'Welcome back!',
          icon: 'success',
          confirmButtonText: 'Continue'
        });
       
        navigate('/dashboard')
      } else if (result.status == 401) {
        Swal.fire({
          title: 'Login Failed!',
          text: `${result.data}`,
          icon: 'warning',
          confirmButtonText: 'Try Again'
        });
      } else if (result.status == 404) {
        Swal.fire({
          title: 'Login Failed!',
          text: `${result.data}`,
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }else{
           Swal.fire({
        title: 'Login Failed!',
        text: 'Invalid email or password.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-100 to-blue-200 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full px-8 py-10 relative animate-fade-in">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-blue-600 text-5xl animate-bounce">
            medical_information
          </span>
          <h2 className="text-2xl font-bold mt-2">Login to DocPen</h2>
          <p className="text-gray-600">Welcome back! Ready to prescribe?</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div className="flex items-center border rounded-md px-1 py-0.5 bg-gray-50">
            <span className="material-symbols-outlined text-blue-500 mr-2">
              mail
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-md px-1 py-0.5 bg-gray-50">
            <span className="material-symbols-outlined text-blue-500 mr-1">
              lock
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-sm text-center text-gray-600 mt-4">
          Not a user?{' '}
          <Link
            to="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
