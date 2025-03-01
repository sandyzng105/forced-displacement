import { useState } from 'react'
import axios from "axios";
import './App.css'

//iine locations
const locations = [
  "Boston, MA",
  "Lowell, MA",
  "Manchester, NH"
]

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  })

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

//mock function
const handleSubmit = async (e) => {
  e.preventDefault();
  // Simulate API Response (Success)
  console.log("Mock API Call - Data Submitted:", formData);
  // Show a success message
  setMessage("Mock Sign-up successful!");
  // Store in localStorage (Temporary for testing)
  localStorage.setItem("volunteerData", JSON.stringify(formData));
  // Reset form
  setFormData({ name: "", email: "", phone: "", location: "" });
  // Hide message after 3s
  setTimeout(() => setMessage(""), 3000);
};

  //legit function
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const response = await axios.post("http://localhost:5000/signup", formData)
  //     setMessage("Sign-up succesful!")
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       location: "",
  //     })
  //     setTimeout(() => {
  //       setMessage("")
  //     }, 3000)
  //   } catch (error) {
  //     setMessage(error.response?.data?.message || "An error occurred. Try again.")
  //   }
  // }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Volunteer Sign-Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full p-2 border rounded"
            required
          />

          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
            className="w-full p-2 border rounded"
            required
          />

          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            className="w-full p-2 border rounded"
            required
          />

          <label className="block text-gray-700">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Your Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </div>
    </div>
  )
}

export default App
