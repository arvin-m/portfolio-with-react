import React from 'react';
import '../Card/style.css';

function Card() {






    return (
        <div classNameName="container col-sm-12 col-md-12">
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="card">
                        <img src="./Assets/img/project-pic/undraw_shopping_.png" className="card-img-top" alt="./Assets/img/project-pic/undraw_shopping_.png"/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                        <span href="www.google.com"className="card-link fab fa-github-alt "></span>
                        <span href="www.google.com" className="card-link fab fa-chrome "></span>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
      

    )
}


export default Card;
