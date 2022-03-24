import React, { useState } from "react";
import './about.scss';
import left from '../../images/white-left.svg';
import right from '../../images/white-right.svg';
import family from '../../images/family.JPG';
import golf from '../../images/golf.PNG';
import gus from '../../images/gus.jpg';
import travel from '../../images/travel.JPG';


function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = [
        {
            id: '1',
            title: 'My family',
            description: 'This is my wife and beautiful son.  We love reading books together, going to hockey games and eating lots of sweets!',
            img: family,
        },
        {
            id: '2',
            title: 'Gus',
            description: "When he's not eating or napping this little bugger likes to distract me from coding by either standing in front of the screen or meowing at the door to go outside.",
            img: gus,
        },
        {
            id: '3',
            title: 'Golf',
            description: 'During the summer you can catch me at the golf course getting ready for the grinding tournament schedule.',
            img: golf,
        },
        {
            id: '4',
            title: 'Mr. Traveler',
            description: 'I love getting to travel and explore this gorgeous world.  Here I am outside the Burj in Dubai.',
            img: travel,
        },
    ];

    const handleClick = (dir) => {
        dir === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < slider.length - 1 ? currentSlide + 1 : 0);
    };
    
    return (
        <div className="about" id="about">
            
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {slider.map((data) => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                           <h2>{data.title}</h2>
                           <p>{data.description}</p>
                        </div>  
                        <div className="right">
                            <img src={data.img} alt="My family"></img>    
                        </div>  
                    </div>    
                </div>
                ))}
            </div>    
            <img src={left} className="arrow left" alt="" onClick={() => handleClick("left")}></img>
            <img src={right} className="arrow right" alt="" onClick={()=> handleClick()}></img>
        </div>
    )
}

export default About;