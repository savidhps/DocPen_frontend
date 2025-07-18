import React from 'react';

function Home() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Welcome, Doctor!</h2>
      <p className="text-gray-600 mb-6">This is your dashboard overview.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-700">Total Patients Visited</h3>
          <p className="text-3xl text-blue-500 font-bold mt-2">124</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-700">Prescriptions Printed</h3>
          <p className="text-3xl text-green-500 font-bold mt-2">98</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-gray-700">Login Days</h3>
          <p className="text-3xl text-purple-500 font-bold mt-2">35</p>
        </div>
      </div>

      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Tips</h4>
        <ul className="list-disc list-inside text-gray-600">
          <li>Double-check patient allergies before prescribing medication.</li>
          <li>Keep your profile updated for better communication.</li>
          <li>Make use of the available medicines list for quick selection.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
