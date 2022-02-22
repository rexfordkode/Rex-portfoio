import React from 'react';
import  './style.css'
import {Collapse} from 'react-bootstrap';

export default function NavBar() {
    const header = document.querySelector('.navbar');
    window.onscroll = function() {
        const top = window.scrollY;
        if(top >=100) {
            header.classList.add('navbarDark');
        }
        else {
            header.classList.remove('navbarDark');
        }
    }
    // collapse navbar after click on small devices
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarSupportedContent')
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { new Collapse(menuToggle).toggle() })
    })
    
  return (
    <>
        {/* <!-- navbar --> */}
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbarScroll">
        <div className="container">
            <a className="navbar-brand" href="facebook.com">Rex</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>

    </>
  );
}
