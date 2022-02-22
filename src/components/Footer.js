import React from 'react'
import  './style.css'
export default function Footer() {
  return (
    // <!-- footer section-->
    <footer id="footer">
        <div className="container-fluid">
      
            <div className="social-icons mt-4">
                <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.clubhouse.com/" target="_blank"><i className="fab fa-twitch"></i></a>
            </div>
        </div>
    </footer>
  )
}