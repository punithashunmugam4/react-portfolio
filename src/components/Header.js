import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';

const Header=()=>{
   
 return(
    <div className="header">
        <nav className="navbar">
            <Link className="nav" to='/'>Home</Link>
            <Link className="nav" to='education'>Education</Link>
            <Link className="nav" to='projects'>Projects</Link>
            <Link className="nav" to='contact'>Contact</Link>
        </nav>
    </div>
 )
}

export default Header