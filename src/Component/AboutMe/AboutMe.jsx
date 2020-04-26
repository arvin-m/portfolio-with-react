import React from 'react';
import '../AboutMe/style.css';

function Navbar() {






    return (
        
        <div className="container-fluid padding" id="first-main-container">
            <div className="container" id="space"></div>
                {/* about me section */}
            <div className="container shadow-lg p-3 mb-5 bg-white rounded " id="mainContainer">

                <div className="row justify-content-start ">

                    <div className=" col-xs-12 col-sm-12 col-md-4 col-lg-4">
                         <img className="col-sm rounded-circle" src="./Assets/img/arvin 2.png" alt="Assets\images\arvin 2.png"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <p className="paragraph">My name is Arvin Mahmoudi. I was born on September 21,1985 in a small town
                        named,Baneh, just west of Iran. In 2007, I graduated with an associate degree for computer
                        hardware/software. At the end of 2016, I had the opportunity to move to the United
                        States. With a fresh start and a new life with my family, I took my first job at an electrical
                        company. With no experience, I became an electrician! Every day I pushed myself to
                        learn something new and excel at what I was doing. It was interesting and a very great
                        experience, but I wasn’t happy. Like everyone, I had an American dream that I had
                        envisioned for myself. My dream was to be a developer. For a short time, I decided to
                        go back to school and get a college degree. That period of my life was very busy due to
                        raising my two kids and maintaining a job at the same time. Not being able to manage
                        everything, I had to drop out after my first semester. Though I quit, I thought about my
                        dream every day and I was still determined.
                        </p>
                    </div>  
                 </div>
                <div className="row justify-content-start">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p className="paragraph">Learning code and being a developer
                            wasn’t just going to be my “dream” anymore, it was going to become my plan! For me to
                            be able have a better life for my family and myself and to be happy, I had to complete
                            that missing part my part of my life.
                            I have finally gotten back on track! I have managed
                            the time and resources to study as a web developer at Georgia Tech Bootcamp. Life
                            couldn’t be better at the moment. I have a great family and pursuing a discipline that I’m
                            very passionate about. These days, I keep a focused attitude and determination in all
                            aspects in my life. Not only do I like to push myself mentally, but also, physically! My
                            favorite time is when I’m in the gym. I love to work out! And like everyone, Music to top it off!
                        </p>
                    </div>
                 </div>
            </div>
        </div>

    


   


    )
}


export default Navbar;
