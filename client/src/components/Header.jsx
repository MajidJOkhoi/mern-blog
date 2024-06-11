"use client";

import React, { useState } from "react";
import { Navbar, TextInput, Button, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar fluid rounded className="p-4 bg-gradient-to-r from-blue-500 to-teal-500 border-b-2 rounded-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            Majid Ali
          </Link>
        </div>

      

         {/* Search Bar with Icon */}
         <div className="relative flex items-center flex-grow space-x-4 hidden md:flex">
          <TextInput
            type="text"
            placeholder="Search..."
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
        <div className="hidden md:flex items-center space-x-4">
          <DarkThemeToggle onClick={toggleDarkMode} />
          <Button gradientDuoTone="purpleToBlue" as={Link} to="/sign-up">
            Sign Up
          </Button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-300">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center space-y-4">
            <NavLink to="/" label="Home" onClick={toggleMenu} />
            <NavLink to="/about" label="About" onClick={toggleMenu} />
            <NavLink to="/project" label="Project" onClick={toggleMenu} />
            <TextInput
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
            <Button outline gradientDuoTone="cyanToBlue" as={Link} to="/sign-up" onClick={toggleMenu}>
              Sign Up
            </Button>
            <DarkThemeToggle onClick={toggleDarkMode} />
          </div>
        </div>
      )}
    </Navbar>
  );
}

const NavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-lg font-medium  hover:text-gray-300 transition duration-300 ease-in-out"
  >
    {label}
  </Link>
);

export default Header;
