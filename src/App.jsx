import "./App.css";
import School from "./school";
import Home from "./home";
import About from "./about";
import Department from "./department";
import Form from "./form";
import { Routes, Route, Link } from "react-router";
import Webdev1 from "./webdev1";

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
       <Webdev1/>
      </div>
    </>
  );
}

export default App;
