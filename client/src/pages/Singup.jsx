import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast ,ToastContainer } from "react-toastify";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", formData);
      if (response.data) {
        toast.success(" User Registred successfull ...");
        setTimeout(() => {
          navigate("/sign-in");
        }, 2000);
      }
    } catch (err) {
      setError(err.response.data.message || "Something went wrong!");
      toast.error(error);
    }
  };

  return (
    <>
      <div className="min-h-screen mt-20 flex justify-center items-center">
        <div className="flex-1 flex flex-col justify-center items-center p-6 max-w-md">
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4"
          >
            Majid Ali
          </Link>
          <p className="text-lg text-center">
            This is my project of a blogging application using Express, Node.js, and MongoDB.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center p-6">
          <div className="px-8 py-6 w-full max-w-md">
            <h2 className="text-2xl mb-2 text-bold text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="username" className="block mb-2">Username</Label>
                <TextInput
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  required
                  className="w-full"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="email" className="block mb-2">Email</Label>
                <TextInput
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" className="block mb-2">Password</Label>
                <TextInput
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="w-full"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <Button gradientDuoTone="purpleToBlue" type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
              <div className="mt-3">
                Already have an account?{" "}
                <Link to="/sign-in" className="text-blue-500 hover:underline">Sign In</Link>
              </div>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Signup;
