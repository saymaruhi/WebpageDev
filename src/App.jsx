import "./App.css";
<<<<<<< HEAD
import School from "./school";
import Home from "./home";
import About from "./about";
import Department from "./department";
import Form from "./form";
=======
import School from "./school.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Department from "./department.jsx";
import Form from "./form.jsx";
>>>>>>> sprint1
import { Routes, Route, Link } from "react-router";


function App() {
  return (
    <>
<<<<<<< HEAD
      <div cla>
=======
      <div >
>>>>>>> sprint1
        <div >
        <School />

        <div>
          <nav className="NavLink">
<<<<<<< HEAD
            <Link to="/">Home</Link>
=======
            <Link to="/">Home </Link>
>>>>>>> sprint1

            <Link to="/about">About</Link>
            <Link to="/department">Department</Link>
            <Link to="/form">Form & Documents</Link>
          </nav>
        </div>

        <div className="pageContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/department" element={<Department />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
        </div>
      
      </div>
    </>
  );
}

export default App;
