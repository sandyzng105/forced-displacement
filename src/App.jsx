import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
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
        w-max
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
      
      <nav className="flex gap-6 text-lg">

      <div className="text-3xl font-bold mt-2">PATHWAY</div>
        <Link to="/" className="hover:text-gray-300 mt-3">
          Home
        </Link>
        <Link to="/feed" className="hover:text-gray-300 mt-3">
          Feed
        </Link>
        <Link to="/faq" className="hover:text-gray-300 mt-3">
          FAQ
        </Link>

        <Link to="/signin">
          <button className="ml-auto bg-blue-600 text-black px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200">
            Sign In
          </button>
        </Link>

      </nav>
      
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
                className="w-full text-black bg-blue-600 hover:bg-blue-700 p-4 rounded-lg font-bold shadow-lg transition duration-200"
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
           title: "Gift Cards Needed",
           orgName: "IINE Boston",
           description: "Looking for department store gift cards to help buy clothes for a family.",
           location: "Boston, MA",
      },
      {
      id: 2,
           title: "Furnishing Apartment",
           orgName: "IINE Lowell",
           description: "Looking for furniture and volunteers to help transport furniture via car for a new arrival.",
           location: "Lowell, MA",
      },
      {
      id: 3,
           title: "Packaged Food",
           orgName: "IINE Manchester",
           description: "Looking for meals to support influx of new families.",
           location: "Manchester, NH",
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

// Posts component
function Posts() {
  const posts = [
    {
      id: 1,
           title: "Gift Cards Needed",
           orgName: "IINE Boston",
           description: "Looking for department store gift cards to help buy clothes for a family.",
           location: "Boston, MA",
      },
      {
      id: 2,
           title: "Furnishing Apartment",
           orgName: "IINE Lowell",
           description: "Looking for furniture and volunteers to help transport furniture via car for a new arrival.",
           location: "Lowell, MA",
      },
      {
      id: 3,
           title: "Packaged Food",
           orgName: "IINE Manchester",
           description: "Looking for meals to support influx of new families.",
           location: "Manchester, NH",
      },
      
  ];

  const [addedPosts, setAddedPosts] = useState({});
  const [selectedLocation, setSelectedLocation] = useState('');

  // Handle the addition of "Added"
  const handleAdd = (postId) => {
    setAddedPosts((prevAddedPosts) => ({
      ...prevAddedPosts,
      [postId]: true,
    }));
  };

  // Handle filter change
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Filter posts based on the selected location
  const filteredPosts = selectedLocation
    ? posts.filter((post) => post.location === selectedLocation)
    : posts;

    return (
      <div className="px-6 py-12 text-white">
        {/* Logo/Link to Home */}
        <Link
          to="/"
          className="absolute top-4 left-6 text-2xl text-blue-500 hover:text-blue-700"
        >
          PATHWAY
        </Link>
  
        <h2 className="text-4xl font-bold text-center mb-6">Organization Requests</h2>
  
        {/* Location Filter */}
        <div className="mb-6 text-center">
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className="bg-gray-700 text-white px-4 py-2 rounded-full"
          >
            <option value="">All Locations</option>
            <option value="Boston, MA">Boston, MA</option>
            <option value="Lowell, MA">Lowell, MA</option>
            <option value="Manchester, NH">Manchester, NH</option>
          </select>
        </div>
  
        {/* Scrollable Posts Container */}
        <div className="max-w-4xl mx-auto overflow-y-scroll h-[calc(100vh-200px)]">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 mb-6">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-1">
                <strong>Organization:</strong> {post.orgName}
              </p>
              <p className="text-gray-300">{post.description}</p>
              <p className="text-gray-300">
                <strong>Location:</strong> {post.location}
              </p>
  
              {/* Button to Add Post */}
              <button
                onClick={() => handleAdd(post.id)}
                className="mt-4 bg-blue-600 text-black px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200"
              >
                Sign me up!
              </button>
  
              {/* Display "Added" if the button was clicked */}
              {addedPosts[post.id] && <p className="mt-4 text-green-500">Request Sent!</p>}
            </div>
          ))}
        </div>
      </div>
    );
}

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "volunteer", // Default role selection
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mock API Call - Signing in:", formData);
    setMessage("Mock Sign-in successful!");
    setTimeout(() => setMessage(""), 3000);

    // Redirect based on role
    if (formData.role === "volunteer") {
      navigate("/posts");
    } else if (formData.role === "organizer"){
      navigate("/organizer");
    }
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 overflow-auto w-full">
      <div className="w-full flex justify-center">
        <div className="max-w-md w-full bg-black p-10 rounded-xl shadow-xl border border-gray-800">
          <h2 className="text-4xl font-bold text-center text-white">Sign In</h2>
          <p className="text-gray-400 text-center mt-2">Welcome back to Pathway</p>
          
          <form className="mt-6 flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-300 block mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-2">Sign in as:</label>
              <div className="flex gap-4 justify-center">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="volunteer"
                    checked={formData.role === "volunteer"}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                  />
                  Volunteer
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="organizer"
                    checked={formData.role === "organizer"}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                  />
                  Organizer
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-black bg-blue-600 hover:bg-blue-700 p-4 rounded-lg font-bold shadow-lg transition duration-200"
            >
              Sign In
            </button>
          </form>
          {message && <p className="text-center text-green-500 mt-4">{message}</p>}

          <p className="text-gray-400 text-center mt-6">
            Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-700">Sign Up</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

const OrganizerDashboard = () => {
  // Mock data for organizer's posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Gift Cards needed",
      description: "Looking for department store gift cards to help buy clothes for a family.",
      status: "Pending",
      volunteers: [],
      }, 
      {
      id: 2,
      title: "Furnishing apartment",
      description: "Looking for furniture and volunteers to help transport (car) for a new arrival.",
      status: "Fulfilled",
      volunteers: ["Adam Thompson"],
      },
      {
      id: 3,
      title: "Packaged food",
      description: "Looking for meals to support influx of new families",
      status: "Fulfilled",
      volunteers: [],
      },
      {
      id: 4,
      title: "Blankets",
      description: "Need blankets for a family of 5",
      status: "Pending",
      volunteers: [],
      },
      
  ]);

  // Function to delete a post
  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // Function to add a new post
  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="px-6 py-12 text-white">
      {/* Logo/Link to Home */}
      <Link
          to="/"
          className="absolute top-4 left-6 text-2xl text-blue-500 hover:text-blue-700"
        >
          PATHWAY
        </Link>
  
        
      <h2 className="text-4xl font-bold text-center mb-6">Organizer Dashboard</h2>
      <div className="flex justify-center gap-4 mb-8">
        
        {/* Create New Post Button */}
      <div className="text-center mb-8">
        <Link
          to="/create-post"
          className="bg-blue-200 text-black px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200"
        >
          Create New Post
        </Link>
      </div>

      {/* See resources database */}
      <div className="text-center mb-8">
        <Link
          to="/resources"
          className="bg-blue-200 text-black px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200"
        >
          Resources Database
        </Link>
      </div>

      </div>

      

      {/* List of Posts */}
      <div className="max-w-4xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 mb-6"
          >
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <p className="text-gray-400 mb-2">
              <strong>Status:</strong> {post.status}
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Volunteers:</strong>{" "}
              {post.volunteers.length > 0 ? post.volunteers.join(", ") : "No volunteers yet."}
            </p>

            {/* Actions */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => handleDeletePost(post.id)}
                className="bg-red-600 text-black px-4 py-2 rounded-full hover:bg-red-700 transition duration-200"
              >
                Delete Post
              </button>
              <button
                onClick={() => console.log("Edit post:", post.id)}
                className="bg-yellow-600 text-black px-4 py-2 rounded-full hover:bg-yellow-700 transition duration-200"
              >
                Edit Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ResourcesPage = () => {
  // Mock data for resources
  const [resources, setResources] = useState([
    {
      id: 1,
      name: "Gift Cards needed",
      description: "Looking for department store gift cards to help buy clothes for a family.",
      status: "Pending",
      volunteers: [],
      }, 
      {
      id: 2,
      name: "Furnishing apartment",
      description: "Looking for furniture and volunteers to help transport (car) for a new arrival.",
      status: "Fulfilled",
      volunteers: ["Adam Thompson"],
      },
      {
      id: 3,
      name: "Packaged food",
      description: "Looking for meals to support influx of new families",
      status: "Fulfilled",
      volunteers: ["Zak Gladney"],
      },
      {
      id: 4,
      name: "Blankets",
      description: "Need blankets for a family of 5",
      status: "Pending",
      volunteers: ["Sandy Zheng"],
      },
    
  ]);

  // Function to delete a resource
  const handleDeleteResource = (resourceId) => {
    setResources(resources.filter((resource) => resource.id !== resourceId));
  };

  return (
    <div className="px-6 py-12 text-white">

      {/* Logo/Link to Home */}
      <Link
          to="/"
          className="absolute top-4 left-6 text-2xl text-blue-500 hover:text-blue-700"
        >
          PATHWAY
        </Link>


      <h2 className="text-4xl font-bold text-center mb-6">My Resources</h2>

      {/* Create New Resource Button */}
      <div className="text-center mb-8">
        <Link
          to="/create-resource"
          className="bg-blue-200 text-black-900 px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200"        >
          Create New Resource
        </Link>
      </div>

      {/* Resources Table */}
      <div className="max-w-6xl mx-auto">
        <table className="w-full bg-gray-800 rounded-lg shadow-lg border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-6 py-3 text-left text-sm font-semibold">Resource Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Volunteers</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.id} className="border-b border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-4 text-gray-300">{resource.name}</td>
                <td className="px-6 py-4 text-gray-300">{resource.description}</td>
                <td className="px-6 py-4 text-gray-300">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      resource.status === "Pending"
                        ? "bg-yellow-600 text-white"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {resource.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {resource.volunteers.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {resource.volunteers.map((volunteer, index) => (
                        <li key={index}>{volunteer}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No volunteers yet.</p>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => console.log("Edit resource:", resource.id)}
                      className="bg-yellow-600 text-black px-4 py-2 rounded-full hover:bg-yellow-700 transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteResource(resource.id)}
                      className="bg-red-700 text-black px-4 py-2 rounded-full hover:bg-red-800 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CreatePost = ({ handleAddPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    status: "Pending", // Default status
  });
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(), // Generate a unique ID
      title: formData.title,
      description: formData.description,
      location: formData.location,
      status: formData.status,
      volunteers: [], // Initialize with no volunteers
    };
    handleAddPost(newPost); // Add the new post to the list
    navigate("/organizer-dashboard"); // Redirect to the dashboard
  };

  return (
    <div className="px-6 py-12 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Create New Post</h2>
      <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className="mb-6">
          <label className="text-gray-300 block mb-2">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter a title for your post"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description Field */}
        <div className="mb-6">
          <label className="text-gray-300 block mb-2">Description</label>
          <textarea
            name="description"
            placeholder="Describe the resource you need"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          />
        </div>

        {/* Location Field */}
        <div className="mb-6">
          <label className="text-gray-300 block mb-2">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a location</option>
            <option value="Boston, MA">Boston, MA</option>
            <option value="Lowell, MA">Lowell, MA</option>
            <option value="Manchester, NH">Manchester, NH</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-gray-900 px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

const AppLayout = () => {
  const location = useLocation();
  const showHeader = !["/posts", "/organizer", "/resources", "/create-post"].includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/organizer" element={<OrganizerDashboard />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </>
  );
};


//router
function App() {
  return (
    <div className="bg-black min-h-screen">
      <Router>
        {/* Render the Header once so it remains consistent */}
        <AppLayout />
      </Router>
    </div>
  );
}

export default App;
