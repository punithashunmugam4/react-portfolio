import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/header.css';

const Header=()=>{
   
 return(
    <header className="header">
        <NavLink className="brand" to="/" aria-label="Home"><span>PS</span></NavLink>
        <nav className="navbar" aria-label="Main navigation">
            <NavLink className={({isActive}) => isActive ? 'nav active' : 'nav'} to="/" end>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav active' : 'nav'} to="/education">Education</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav active' : 'nav'} to="/projects">Projects</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav active' : 'nav'} to="/contact">Contact</NavLink>
        </nav>
    </header>
 )
}

export default Header