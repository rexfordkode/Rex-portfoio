import React from 'react'
import  './style.css'

export default function Banner() {
  return (
    // <!-- main banner -->
    <section className="bgimage" id="home">
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                <h2 className="hero_title">Hi, it's me Rex!</h2>
                <p className="hero_desc">I am a professional web developer in Ghana - Takoradi</p>
                <a className="btn btn-danger btn-lg" href="#" role="button">Test App</a>
            </div>
            
            </div>
        </div>
    </section>
  )
}
