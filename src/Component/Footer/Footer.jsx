import React from 'react';
import '../Footer/style.css';

function Footer() {






    return (
        <React.Fragment>
            <div className="push"></div>
            <footer className="footer ">
                <div className="container-fluid padding ">
                    <div className="row text-center">
                        <div className="col-sm-12 col-md-12">
                            <a className="col-sm-6 col-md-12" href="mailto:mahmoudi.arvin@gmail.com ? "><span className="fas fa-paper-plane"></span>mahmoudi.arvin@gmail.com </a>
                        </div>
                        <span className="copyRight col-sm-12 col-md-12">&copy;Arvin Mahmoudi</span>
                    </div>
                </div>
            </footer>
        </React.Fragment>



    )
}


export default Footer;
