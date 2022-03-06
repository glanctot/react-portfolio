import React from "react";
import './footer.scss';
import github from '../../images/github.svg';
import linked from '../../images/linkedin.svg';
import insta from '../../images/instagram.svg';

function Footer() {
    return (
        <div className="footer">
            <footer>
                Made by Greg Lanctot &copy;2020
                <div className="icons">
                    <a href="https://github.com/glanctot" target="_blank">
                        <img src={github} alt="GitHub Logo"></img>
                    </a> 
                    <a href="https://www.linkedin.com/in/greg-lanctot-05712a221/" target="_blank">
                        <img src={linked} alt="LinkedIn Logo"></img>
                    </a>
                    <a href="https://www.instagram.com/lanctotgreg/" target="_blank">
                        <img src={insta} alt="GitHub Logo"></img>  
                    </a>
                </div>
                
                
            </footer>    
        </div>
    )
}

export default Footer;