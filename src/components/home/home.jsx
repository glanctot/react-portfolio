import React from "react";
import home from '../../images/home-photo-edit.jpg';

function Home() {
    return (
        <div className="home">
            <div className="left">
                <div className="imgContainer">
                    <img src={home} alt='Greg'></img>    
                </div>
            </div>    
            <div className="right">
                <h2>Welcome Everyone!</h2>    
                <h1>I'm Greg.</h1>
                <h4>Full Stack Web Developer</h4>
            </div>
        </div>
    )
}

export default Home;