import React from "react";
import home from '../../images/home.png';
import './home.scss';

function Home() {
    return (
        <div className="home">
            <div className="left">
                <div className="imgContainer">
                    <img src={home} alt='Greg'></img>    
                </div>
            </div>    
            <div className="right">
                <div className="text">
                    <h2>Welcome Everyone!</h2>    
                    <h1>I'm Greg.</h1>
                    <h4>A Full Stack Web Developer living in Minneapolis</h4>
                </div>
            </div>
        </div>
    )
}

export default Home;