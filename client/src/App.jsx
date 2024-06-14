import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Singin from "./pages/Singin";
import Singup from "./pages/Singup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<About />} />
        <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
        
        <Route path="/project" element={<Project />} />
        <Route path="/sign-in" element={<Singin />} />
        <Route path="/sign-up" element={<Singup />} />
      </Routes>
      <Footer/>
    </>
  );
}
