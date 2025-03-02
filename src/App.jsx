import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

//Header
function Header() {
  return (
    <header
      className="
        bg-gray-900
        text-white
        mt-6
        mx-auto
        w-full
        max-w-7xl
        h-20
        px-8
        rounded-full
        flex
        flex-none
        items-center
        justify-between
        whitespace-nowrap
        overflow-hidden
      "
    >
      <div className="text-3xl font-bold">PATHWAY</div>
      <nav className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/feed" className="hover:text-gray-300">
          Feed
        </Link>
        <Link to="/faq" className="hover:text-gray-300">
          FAQ
        </Link>
        <Link to="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </nav>
      <button className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200">
        Sign In
      </button>
    </header>
  );
}

// Home page. Need to implement a way to submit the form and store the data in the backend
function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //this function is still fake lol
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mock API Call - Data Submitted:", formData);
    setMessage("Mock Sign-up successful!");
    localStorage.setItem("volunteerData", JSON.stringify(formData));
    setFormData({ name: "", email: "", phone: "", location: "" });
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 overflow-auto w-full">
      <div className="w-full flex justify-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-6xl font-extrabold text-center">PATHWAY</h1>
          <h2 className="text-4xl font-semibold mt-2 text-gray-300 text-center">
            Help <span className="text-gray-400">refugees near you.</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 text-center max-w-xl mx-auto">
            Connecting donations and volunteers to organizations in need.
          </p>

          <div className="mt-10 w-full max-w-md bg-black p-10 rounded-xl shadow-xl border border-gray-800 mx-auto">
            <h3 className="text-2xl font-semibold text-center">Sign up!</h3>
            <form className="mt-6 flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-300 block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-2">Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select...</option>
                  <option value="boston">Boston, MA</option>
                  <option value="lowell">Lowell, MA</option>
                  <option value="manchester">Manchester, NH</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-lg font-bold shadow-lg transition duration-200"
              >
                Submit
              </button>
            </form>
            {message && <p className="text-center text-green-500 mt-4">{message}</p>}
          </div>

          <div className="mt-20 text-center max-w-lg mx-auto">
            <h3 className="text-blue-500 font-semibold text-lg">INTRODUCING PATHWAY</h3>
            <p className="text-gray-400 mt-4 text-xl">
              <span className="text-white font-bold">We know what’s going on.</span> You have
              donations and resources to help out with refugee resettlement, but don’t know where or
              what to give. That’s when Pathway comes in.
            </p>
          </div>

          <div className="mt-16 text-center max-w-lg mx-auto">
            <h3 className="text-blue-500 font-semibold text-lg">What you’ll get</h3>
            <p className="text-gray-400 mt-4 text-xl">
              We make it easy to give back. Sign up and indicate what you have to offer. We’ll show you organizations that need your help.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-24 text-gray-600 text-sm text-center w-full">
        <p>Made with love by Zakiriya Gladney, Sandy Zheng, Max Chen</p>
      </footer>
    </div>
  );
}

// Feed page. need to implement a way to add posts, and a way to view posts as a user, once backend is implemented
function Feed() {
  const posts = [
    {
      id: 1,
      title: "Winter Coats Needed",
      orgName: "Refugee Aid Boston",
      description: "Looking for warm coats, scarves, and hats for new arrivals.",
    },
    {
      id: 2,
      title: "Volunteers for English Classes",
      orgName: "Community Center Lowell",
      description: "Seeking volunteers to help teach basic English twice a week.",
    },
    {
      id: 3,
      title: "Household Items & Furniture",
      orgName: "Manchester Help Group",
      description: "Need gently used furniture, dishes, and bedding.",
    },
  ];

  return (
    <div className="px-6 py-12 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Organization Requests</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-1">
              <strong>Organization:</strong> {post.orgName}
            </p>
            <p className="text-gray-300">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// FAQ page
function FAQ() {
  const faqs = [
    {
      question: "How do I sign up?",
      answer: "Click on the sign-up form on the Home page and fill out your details.",
    },
    {
      question: "How do I access the feed?",
      answer: "Click on the 'Feed' link in the header to view organization requests.",
    },
    {
      question: "How can I contact support?",
      answer: "Use the 'Contact' link in the header or email support@pathway.com.",
    },
  ];

  return (
    <div className="px-6 py-12 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

//router
function App() {
  return (
    <div className="bg-black min-h-screen">
      <Router>
        {/* Render the Header once so it remains consistent */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/faq" element={<FAQ />} />
          {/* You can add a Contact page similarly */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
