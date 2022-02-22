import React from 'react';
import './style.css';
import './Contact.css'

export default function Contact() {


  return (
    <section id="contact">
        <div className="container mt-3 contactContent">
            <h1 className="text-center">Contact Me</h1>

            <div className="row mt-4">
            <div className="col-lg-6">    
              <div >
                <div id="gmapcanvas" className='mystyle1'>
                  <iframe title="location" className='mystyle' frameborder="0" src={"https://www.google.com/maps/embed/v1/place?q=Diabene&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}></iframe>

                </div>
                <a className="embedded-maphtml" rel="nofollow" href="https://www.embed-map.com" id="make-mapinformation"></a>
             </div>
  </div>     
                <div className="col-lg-6">
                    {/* <!-- form fields --> */}
                    <form className="form-control">
                        <input type="text" className="form-control form-control-lg rounded mb-3 form-put" placeholder="Name" />
                        <input type="email" className="form-control mt-3" placeholder="Email" />
                        <input type="text" className="form-control mt-3" placeholder="Subject" />
                        <div className="mb-3 mt-3">
                            <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                        </div>
                    </form>
                    <button id="contact-me" type="button" className="btn btn-primary mt-3 text-center">Contact Me</button>  
                    
                </div>
            </div>
        </div>
        
    </section>
  );
}
