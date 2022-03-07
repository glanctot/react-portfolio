import React from "react";
import './contact.scss'

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <form className="form">
                <label htmlFor="name">Name:</label>
                <input type="text"></input>
                <label htmlFor="email">Email:</label>
                <input type="text"></input>
                <label htmlFor="message">Message:</label>
                <textarea type="text"></textarea>
                <button>Submit</button>    
            </form>
        </div>
    )
}

export default Contact;