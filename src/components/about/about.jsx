import React from "react";
import './about.scss';
import family from '../../images/family.JPG';

function About() {
    return (
        <div className="about" id="about">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                           <h2>Title</h2>
                           <p>description</p>
                        </div>  
                        <div className="right">
                            <img src={family} alt="My family"></img>    
                        </div>  
                    </div>    
                </div>
            </div>    
        </div>
    )
}

export default About;