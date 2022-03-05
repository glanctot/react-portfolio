import React from "react";
import { Link } from 'react-router-dom';
import './nav.scss';


function Nav() {
    return (
        <div className="header">
            <a href="/">g.lanctot</a>
            <div className="wrapper">
                <nav>   
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav;