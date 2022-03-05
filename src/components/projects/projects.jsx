import React from "react";
import './projects.scss';
import budget from '../../images/budget.JPG';
import beyond from '../../images/beyond.JPG';
import weather from '../../images/weather.JPG';
import run from '../../images/run.JPG';
import tech from '../../images/tech.JPG';
import password from '../../images/password.JPG';


// https://lit-dawn-92675.herokuapp.com/ budget tracker
// https://pacific-journey-17528.herokuapp.com/ beyond
// https://glanctot.github.io/weather-dashboard/ weather
// https://glanctot.github.io/run-buddy/ run buddy
// https://nameless-savannah-39271.herokuapp.com/ tech blog
// https://glanctot.github.io/password-generator/ password

function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>    
            <div className="container">
                <div className="item">
                    <img src={beyond} alt="Beyond the Peak" />
                    <div className="text">
                        <h3>Beyond the Peak</h3>  
                        <a href="https://pacific-journey-17528.herokuapp.com/" target="_blank">Website</a>
                        <a href="https://github.com/glanctot/beyond-the-peak" target="_blank">GitHub</a>
                    </div>  
                </div>
                <div className="item">
                    <img src={budget} alt="Budget Tracker" />
                    <div className="text">
                        <h3>Budget Tracker</h3>  
                        <a href="https://lit-dawn-92675.herokuapp.com/" target="_blank">Website</a>
                        <a href="https://github.com/glanctot/budget-tracker" target="_blank">GitHub</a>
                    </div>  
                </div>
                <div className="item">
                    <img src={weather} alt="Weather Dashboard" />
                    <div className="text">
                        <h3>Weather Dashboard</h3>  
                        <a href="https://glanctot.github.io/weather-dashboard/" target="_blank">Website</a>
                        <a href="https://github.com/glanctot/weather-dashboard" target="_blank">GitHub</a>
                    </div> 
                </div>
                <div className="item">
                    <img src={run} alt="Run Buddy" />
                    <div className="text">
                        <h3>Run Buddy</h3>  
                        <a href="https://glanctot.github.io/run-buddy/" target="_blank">Website</a>
                        <a href="https://github.com/glanctot/run-buddy" target="_blank">GitHub</a>
                    </div>   
                </div>
                <div className="item">
                    <img src={tech} alt="Tech Blog" />
                    <div className="text">
                        <h3>Tech Blog</h3>  
                        <a href="https://nameless-savannah-39271.herokuapp.com/" target="_blank">Website</a>
                        <a href="https://github.com/glanctot/tech-blog" target="_blank">GitHub</a>
                    </div>   
                </div>
                <div className="item">
                    <img src={password} alt="Password Generator" />
                    <div className="text">
                        <h3>Password Generator</h3>  
                        <a href="https://glanctot.github.io/password-generator/">Website</a>
                        <a href="https://github.com/glanctot/password-generator">GitHub</a>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Projects;