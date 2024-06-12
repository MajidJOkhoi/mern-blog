import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signin", {
        email,
        password,
      });
      if (response.data) {
        toast.success("Sign in successful!");
        setTimeout(() => {
          navigate("/");
        }, 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      toast.error("Sign in failed. Please check your credentials.");
    }
  };

  return (
    <>
      <div className="min-h-screen mt-20 flex justify-center items-center">
        {/* Right side */}
        <div className="flex-1 flex justify-center items-center p-6">
          <div className="px-8 py-6 w-full max-w-md">
            <h2 className="text-2xl mb-2 text-bold text-center">Sign In</h2>
            <form onSubmit={handleSignin}>
              <div className="mb-4">
                <Label htmlFor="email" className="block mb-2">
                  Email
                </Label>
                <TextInput
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" className="block mb-2">
                  Password
                </Label>
                <TextInput
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <Button gradientDuoTone="purpleToBlue" type="submit">
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signin;
