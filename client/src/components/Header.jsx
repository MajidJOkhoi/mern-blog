"use client";

import React, { useState } from "react";
import { Navbar, TextInput, Button, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <Navbar fluid rounded className="p-4 bg-slate-400 border-b-2 rounded-lg">

      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Majid Ali
          </Link>
        </div>
        
        {/* Search Bar with Icon */}
        <div className="relative flex items-center flex-grow space-x-4">
          <TextInput
            type="text"
            placeholder="Search... "
            className="flex-grow p-2 rounded-md dark:bg-gray-700 dark:border-gray-600"
            rightIcon={AiOutlineSearch}
          />
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center justify-center space-x-4">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/project" label="Project" />
        </div>

        {/* Right Side: Dark Mode Toggle and Sign-Up Button */}
        <div className="flex items-center space-x-4">
          <DarkThemeToggle onClick={toggleDarkMode} />
          <Button outline gradientDuoTone="cyanToBlue" as={Link} to="/sign-up">
            Sign Up
          </Button>
        </div>
      </div>
    </Navbar>
  );
}

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-lg font-medium text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white"
  >
    {label}
  </Link>
);

export default Header;
