import React from 'react';
import  './style.css'

export default function componentName() {
  return (
    // <!-- portfolio section-->
    <section id="portfolio">
        
        <div className="container mt-3">
            <h1 className="text-center">Portfolio</h1>
            <div className="row">
                <div className="col-lg-4 mt-4 ">
                <img class="card-img-top" src="/images/flex-app.png" alt="Cardimage"  style={{ width:"100%" }} />
                        <div className="card-body">
                            <h4 className="card-title">FlexBox Todo</h4>
                            <p className="card-text">This Project was build with HTML5, CSS & JavaScript</p>
                            <div className="text-center">
                                <a href="https://github.com/rexfordkode/Flexbox-Todo-App.git" className="btn btn-dark">Check</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="/images/quote-api.jpg" alt="Cardimage"  style={{ width:"100%" }} /> 
                        <div className="card-body">
                            <h4 className="card-title">Quote API</h4>
                            <p className="card-text">An application that give you a randome inspirational Qoate.</p>
                            <div className="text-center">
                                <a href="https://github.com/rexfordkode/Quote-API.git" className="btn btn-dark">Check</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="/images/iiot-dash.jpg" alt="Cardimage" style={{ width:"100%" }} /> 
                        <div className="card-body">
                            <h4 className="card-title">IIoT Dashboard</h4>
                            <p className="card-text">This application is a conceptual design of a Testing Broker which has it own broker build with NPM Aedes and able to connect to different IIoT devices for pub/sub activities.</p>
                            <div className="text-center">
                                <a href="https://github.com/rexfordkode/IIoT-Dashboard.git" className="btn btn-dark">Check</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container mt-3">
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="/images/pern-stack.png" alt="Cardimage"  style={{ width:"100%" }} /> 
                        <div className="card-body">
                            <h4 className="card-title">TODO with PERN</h4>
                            <p className="card-text">This project was build with Postgres Express.js, Node.js and React.js very responsive.</p>
                            <div className="text-center">
                                <a href="https://github.com/rexfordkode/PERN-todo.git" className="btn btn-dark">Check</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="/images/shop-cart.jpg" alt="Cardimage" style={{ width:"100%" }} /> 
                        <div className="card-body">
                            <h4 className="card-title">Shop Cart with React</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="https://github.com/rexfordkode/Shop-Cart-React-Project.git" className="btn btn-dark">Check</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="/images/jamming.jpg" alt="card" style={{ width:"100%" }} /> 
                        <div className="card-body">
                            <h4 className="card-title">Jamming App</h4>
                            <p className="card-text">This is an App that.</p>
                            <div className="text-center">
                                <a href="/#" className="btn btn-dark">Check</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </section>
  
  )
}
