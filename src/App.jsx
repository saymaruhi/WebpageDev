import "./App.css";
import School from "./school.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Department from "./department.jsx";
import Form from "./form.jsx";
import { Routes, Route, Link } from "react-router";


function App() {
  return (
    <>
      <div cla>
        <div >
        <School />

        <div>
          <nav className="NavLink">
            <Link to="/">Home</Link>

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
