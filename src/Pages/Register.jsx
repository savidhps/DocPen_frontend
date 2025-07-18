import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { registerApi } from '../services/allapi';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    age: '',
    gender: '',
    contact: '',   // keep 'contact' consistently
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Doctor name is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.age || parseInt(formData.age) < 18) newErrors.age = 'Valid age (18+) is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.contact.match(/^\d{10}$/)) newErrors.contact = 'Enter a valid 10-digit contact number';
    if (!formData.email.match(emailRegex)) newErrors.email = 'Enter a valid email';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const { name, location, age, gender, contact, email, password } = formData;
    try {
      const result = await registerApi({ name, location, age, gender, phone: contact, email, password });

      if (result.status === 200) {
        Swal.fire('Success', 'Registration successful!', 'success');
        navigate('/login');
      } else if (result.response?.status === 409) {
        Swal.fire('User Already Exists', 'Try logging in instead.', 'info');
      } else {
        Swal.fire('Error', 'Registration failed. Try again later.', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Server error. Try again later.', 'error');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-100 to-blue-200 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full px-8 py-10 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-blue-600 animate-bounce text-4xl">
            stethoscope
          </span>
          <h2 className="text-2xl font-bold mt-2">Register with DocPen</h2>
          <p className="text-gray-600">Join our doctor network today</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { name: 'name', label: 'Doctor Name', icon: 'person', type: 'text' },
            { name: 'location', label: 'Location', icon: 'location_on', type: 'text' },
            { name: 'age', label: 'Age', icon: 'calendar_month', type: 'number' },
            { name: 'contact', label: 'Contact Number', icon: 'call', type: 'text' },
            { name: 'email', label: 'Email', icon: 'mail', type: 'email' },
            { name: 'password', label: 'Password', icon: 'lock', type: 'password' },
            { name: 'confirmPassword', label: 'Confirm Password', icon: 'lock_reset', type: 'password' },
          ].map((field) => (
            <div key={field.name}>
              <div className="flex items-center border rounded-md px-2 py-1 bg-gray-50">
                <span className="material-symbols-outlined text-gray-500 mr-2 text-xl">
                  {field.icon}
                </span>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className="bg-transparent w-full focus:outline-none"
                />
              </div>
              {errors[field.name] && (
                <p className="text-sm text-red-500 mt-1 ml-2">{errors[field.name]}</p>
              )}
            </div>
          ))}

          {/* Gender */}
          <div>
            <div className="flex items-center border rounded-md px-2 py-1 bg-gray-50">
              <span className="material-symbols-outlined text-gray-500 mr-2 text-xl">wc</span>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="bg-transparent w-full focus:outline-none"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {errors.gender && (
              <p className="text-sm text-red-500 mt-1 ml-2">{errors.gender}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="text-sm text-center text-gray-600 mt-4">
          Already registered?{' '}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
