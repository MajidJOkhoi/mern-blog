import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { signIn } from "../redux/user/authSlice";
import "react-toastify/dist/ReactToastify.css";
import OAuth from "../components/OAuth";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signIn(formData)).then((response) => {
      if (!response.error) {
        toast.success('User signed in successfully');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        toast.error(response.error.message || 'Sign in failed. Please check your credentials.');
      }
    });
  };

  return (
    <>
      <div className="min-h-screen mt-20 flex justify-center items-center">
        {/* Right side */}
        <div className="flex-1 flex justify-center items-center p-6">
          <div className="px-8 py-6 w-full max-w-md">
            <h2 className="text-2xl mb-2 text-bold text-center">Sign In</h2>
            <form onSubmit={handleSubmit}>
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <Button gradientDuoTone="purpleToBlue" type="submit" className="w-full">
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>
              </div>
                <div className="mt-3">
                  <OAuth />
                </div>
              <div className="mt-3">
                Don't have an account?{' '}
                <Link to="/sign-up" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>

               
              </div>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signin;
