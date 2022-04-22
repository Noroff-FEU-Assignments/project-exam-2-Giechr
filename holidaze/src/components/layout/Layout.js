import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Accommadations from "../accommadations/accommadations/Accommadations"
import AccommadationDetails from "../accommadations/accommadationDetails/AccommadationDetails";
import Admin from "../admin/Admin";
import logo from "../../assets/img/logo.png";


function Layout() {
 return (
  <Router>
   <Navbar bg="white" variant="light" expand="lg">
    <NavLink to="/" >
     <Navbar.Brand>
      <img
        src={logo}
        width="100"
        height="45"
        alt="Holidaze logo"
      />
    </Navbar.Brand>
    </NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mr-auto">
      <NavLink to="/contact" className="nav-link">
       Contact Us
      </NavLink>
      <NavLink to="/accommadations/accommadations" className="nav-link">
       Accommodations
      </NavLink>
      <NavLink to="/about" className="nav-link">
       About
      </NavLink>
       <NavLink to="/accommadations/accommadationDetails" className="nav-link">
       Details
      </NavLink>
       <NavLink to="/admin" className="nav-link">
       Admin
      </NavLink>
     </Nav>
    </Navbar.Collapse>
   </Navbar>
   <>
    <Routes>
     <Route path="/"  element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/accommadations/accommadations" element={<Accommadations />} />
     <Route path="/accommadations/accommadationDetails" element={<AccommadationDetails />} />
     <Route path="/admin" element={<Admin />} />
    </Routes>
   </>
  </Router>
 );
}

export default Layout;