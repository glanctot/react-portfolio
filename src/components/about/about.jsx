import React from "react";
import './about.scss';
import left from '../../images/chevron-left.svg';
import right from '../../images/chevron-right.svg';


function About() {
    const slider = [
        {
            id: '1',
            title: 'My family',
            description: 'This is my wife and beautiful son.  We love reading books together, going to hockey games and eating lots of sweets!',
            img: '../../images/family.JPG',
        },
        {
            id: '2',
            title: 'Gus',
            description: "When he's not eating or napping this little bugger likes to distract me from coding by either standing in front of the screen or meowing at the door to go outside.",
            img: '../../images/gus.jpg',
        },
        {
            id: '3',
            title: 'Golf',
            description: 'During the summer you can catch me at the golf course getting ready for the grinding tournament schedule.',
            img: '../../images/golf.PNG',
        },
        {
            id: '4',
            title: 'Mr Traveler',
            description: 'I love getting to travel and explore this gorgeous world.  Here I am outside the Burj in Dubai.',
            img: '../../images/travel.JPG',
        },
    ];
    
    return (
        <div className="about" id="about">
            
            <div className="slider">
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
            <img src={left} className="arrow left" alt=""></img>
            <img src={right} className="arrow right" alt=""></img>
        </div>
    )
}

export default About;