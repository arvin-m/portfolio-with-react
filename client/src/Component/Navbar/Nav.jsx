import React from 'react';
import '../Navbar/style.css';

function Navbar() {



    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <div>
                    <h1 className="navbar-brand  ">Arvin Mahmoudi</h1>
                </div>
                <div>
                    <p className="header-p">Software Engineer</p>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="index.html" className="nav-link fas fa-home" data-toggle="tooltip" data-placement="bottom"
                                title="Home"><span className="label"></span></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://drive.google.com/file/d/1YAJSV8i7eszpW7brQY4inL7kwoVw0aPC/view?usp=sharing" target="_blank" className=" nav-link far fa-file-alt" data-toggle="tooltip" data-placement="bottom"
                                title="Resume" ><span className="label"></span></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/arvin-mahmoudi" target="_blank" className=" nav-link  fab fa-linkedin"
                                data-toggle="tooltip" data-placement="bottom" title="Linkedin" ><span
                                    className="label"></span></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/arvin-m" target="_blank" className="nav-link  fab fa-github-square "
                                data-toggle="tooltip" data-placement="bottom" title="GitHub"><span className="label"></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}


export default Navbar;
