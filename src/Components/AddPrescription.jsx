import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { addprescriptionApi } from '../services/allapi';

function AddPrescription() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    location: '',
    date: '',
    diagnosis: '',
    advice: '',
  });

  const [symptoms, setSymptoms] = useState(['']);
  const [symptomSuggestions, setSymptomSuggestions] = useState({});
  const [medicines, setMedicines] = useState(['']);
  const [suggestions, setSuggestions] = useState({});

  const doctorInfo = JSON.parse(sessionStorage.getItem("doctorInfo")) || {
    name: 'Dr. John Smith',
    phone: '9876543210',
    email: 'dr.john@example.com',
    location: 'Chennai, India'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSymptomChange = (index, value) => {
    const updated = [...symptoms];
    updated[index] = value;
    setSymptoms(updated);
    fetchSymptomSuggestions(value, index);
  };

  const addSymptom = () => {
    setSymptoms([...symptoms, '']);
  };

  const fetchSymptomSuggestions = async (query, index) => {
    if (query.length < 2) return;
    try {
      const res = await fetch(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${query}`);
      const data = await res.json();
      const names = data[3].map(item => item[0]);
      setSymptomSuggestions(prev => ({ ...prev, [index]: names }));
    } catch (err) {
      setSymptomSuggestions(prev => ({ ...prev, [index]: [] }));
    }
  };

  const handleMedicineChange = (index, value) => {
    const updated = [...medicines];
    updated[index] = value;
    setMedicines(updated);
    fetchMedicineSuggestions(value, index);
  };

  const fetchMedicineSuggestions = async (query, index) => {
    if (query.length < 2) return;
    try {
      const res = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${query}&limit=5`);
      const data = await res.json();
      const names = data.results?.map(item => item.openfda.brand_name[0]) || [];
      setSuggestions(prev => ({ ...prev, [index]: names }));
    } catch (error) {
      console.error('Error fetching medicine suggestions', error);
    }
  };

  const addMedicine = () => {
    setMedicines([...medicines, '']);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      age: '',
      mobile: '',
      location: '',
      date: '',
      diagnosis: '',
      advice: '',
    });
    setMedicines(['']);
    setSymptoms(['']);
    setSuggestions({});
    setSymptomSuggestions({});
  };

  const handleUpload = async () => {
    const payload = {
      doctor: doctorInfo,
      patient: {
        name: formData.name,
        age: formData.age,
        mobile: formData.mobile,
        location: formData.location
      },
      date: formData.date,
      symptoms,
      diagnosis: formData.diagnosis,
      medicines,
      advice: formData.advice
    };

    try {
      const res = await addprescriptionApi(payload);
      if (res.status === 200) {
        Swal.fire("Success", "Prescription saved successfully", "success");
      } else {
        Swal.fire("Error", "Failed to save prescription", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Server error, try again", "error");
    }
  };

  const printPrescription = () => {
    window.print();
    
  };

  return (
    <div>
      {/* Input Section */}
      <div className="print:hidden">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add Prescriptions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Patient Name" value={formData.name} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="border p-2 rounded" />
        </div>

        {/* Symptoms */}
        <div className="mt-4">
          <p className="font-semibold text-gray-700 mb-1">Symptoms:</p>
          {symptoms.map((sym, index) => (
            <div key={index} className="relative mb-2">
              <input type="text" placeholder="Symptom" value={sym} onChange={(e) => handleSymptomChange(index, e.target.value)} className="w-full border p-2 rounded" />
              {symptomSuggestions[index]?.length > 0 && (
                <ul className="absolute bg-white border w-full shadow z-10 mt-1 max-h-40 overflow-auto">
                  {symptomSuggestions[index].map((suggestion, i) => (
                    <li key={i} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => {
                      const updated = [...symptoms];
                      updated[index] = suggestion;
                      setSymptoms(updated);
                      setSymptomSuggestions((prev) => ({ ...prev, [index]: [] }));
                    }}>{suggestion}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <button onClick={addSymptom} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-1">Add Symptom</button>
        </div>

        <textarea name="diagnosis" placeholder="Diagnosis" value={formData.diagnosis} onChange={handleInputChange} className="w-full border p-2 rounded mt-2" />
        <textarea name="advice" placeholder="Advice" value={formData.advice} onChange={handleInputChange} className="w-full border p-2 rounded mt-2" />

        {/* Medicines */}
        <div className="mt-4">
          <p className="font-semibold text-gray-700 mb-1">Medicines:</p>
          {medicines.map((med, index) => (
            <div key={index} className="mb-2 relative">
              <input type="text" placeholder="Medicine" value={med} onChange={(e) => handleMedicineChange(index, e.target.value)} className="border p-2 rounded w-full" />
              {suggestions[index]?.length > 0 && (
                <ul className="absolute bg-white border w-full shadow z-10 mt-1 max-h-40 overflow-auto">
                  {suggestions[index].map((suggestion, i) => (
                    <li key={i} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => {
                      const updated = [...medicines];
                      updated[index] = suggestion;
                      setMedicines(updated);
                      setSuggestions((prev) => ({ ...prev, [index]: [] }));
                    }}>{suggestion}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <button onClick={addMedicine} className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700">Add Medicine</button>
        </div>

        <div className="flex gap-4 mt-4">
          <button onClick={handleUpload} className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Upload</button>
          <button onClick={printPrescription} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Print</button>
          <button onClick={resetForm} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Reset</button>
        </div>
      </div>

      {/* Printable Prescription Section */}
      <div id="print-area" className="p-6 mt-6 bg-white print:p-10 hidden print:block border border-gray-300 rounded shadow">
        <h2 className="text-lg font-bold mb-1">{doctorInfo.name}</h2>
        <p className="text-sm">{doctorInfo.phone} | {doctorInfo.email} | {doctorInfo.location}</p>
        <hr className="my-3 border-t border-black" />
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Mobile:</strong> {formData.mobile}</p>
        <p><strong>Location:</strong> {formData.location}</p>
        <p><strong>Date:</strong> {formData.date}</p>
        <p><strong>Symptoms:</strong></p>
        <ul className="list-disc list-inside">
          {symptoms.map((sym, i) => <li key={i}>{sym}</li>)}
        </ul>
        <p><strong>Diagnosis:</strong> {formData.diagnosis}</p>
        <p><strong>Medicines:</strong></p>
        <ul className="list-disc list-inside">
          {medicines.map((med, i) => <li key={i}>{med}</li>)}
        </ul>
        <p><strong>Advice:</strong> {formData.advice}</p>
      </div>
    </div>
  );
}

export default AddPrescription;
