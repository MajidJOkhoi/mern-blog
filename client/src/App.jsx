import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Singin from "./pages/Singin";
import Singup from "./pages/Singup";

export default function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sign-in" element={<Singin/>} />
        <Route path="/sign-up" element={<Singup />} />
      </Routes>
  
  );
}
