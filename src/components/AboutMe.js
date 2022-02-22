import React from 'react'
import './style.css'
export default function AboutMe() {
  return (
    
    // <!-- about section-->
    <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center">About Me</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img src="/images/about.jpeg" className="imageAboutPage" alt="Rexford" />
                </div>

                <div className="col-lg-8">
                    <p> 
                        Am Rexford, a person who is positive about every aspect of life.
                         There are many things I like to do, to see, and to experience.
                          I like to read, I like to write; I like to think, I like to dream;
                          I like to talk, I like to listen. I like to see the sunrise in the morning,
                           I like to see the moonlight at night; I like to feel the music flowing on my face
                            I like to smell the wind coming from the ocean
                  
                    </p>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <ul>
                                <li>Name: Rexford</li>
                                <li>Age: 18</li>
                                <li>Occupation: Web Developer</li>
                                <li> Location : Ghana</li>
                            </ul>
                        </div>
                       
                    </div>
                    <div className="row mt-3">
                        <p> I am a solution provider for all your business needs. A little over a decade in business analytical skills.
                            I am the idea machine, come speak to me and let brain storm together. I am looking forward to bring technology literacy to the average Ghanaian child. 
                            I am a Tech advocacy for technology for all because I don't believe formal education is the only way to get yourself educated in the tech ecosystem I believe any one who can read and write must 
                            be given equal opportunity to explore technology to identity opportunity and talent.                     </p>
                    </div>
                </div>
            </div>
            </div>
    </section>
  )
}
