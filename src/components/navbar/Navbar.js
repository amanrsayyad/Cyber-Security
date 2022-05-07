import React, { useState } from "react";
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarStyles.css";
import stylotech from "../../assets/stylotech.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

 
  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <img src={stylotech} alt="" />
          <h2>StyloTech</h2>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>{" "}
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="drop-hover">
             <Link to="/">We Assist</Link>
             <ul className="dropdown">
                 <li><Link to="/">Parents</Link></li>
                 <li><Link to="/">Schools</Link></li>
                 <li><Link to="/">Institutions</Link></li>
                 <li><Link to="/">Government</Link></li>
                 <li><Link to="/">Company / Organization / Community</Link></li>
                 <li><Link to="/">Citizen</Link></li>
                 <li><Link to="/">Small & Medium Business</Link></li>
             </ul>
          </li>
          <li className="drop-hover">
             <Link to="/">Programs</Link>
             <ul className="dropdown">
                 <li><Link to="/">Cyber Safe For Kids</Link></li>
                 <li><Link to="/">Cyber Safe For Parents</Link></li>
                 <li><Link to="/">Cyber Safe For Teachers</Link></li>
                 <li><Link to="/">Cyber Safe For Corporates</Link></li>
                 <li><Link to="/">Cyber Safe For Government</Link></li>
                 <li><Link to="/">Cyber Safe For Citizens</Link></li>
                 <li><Link to="/">Cyber Safe For SMB</Link></li>
             </ul>
          </li>
          <button>
            <a href="https://wa.me/918600000084" target="_blank" rel="norefrer">
              Contact
            </a>
          </button>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
