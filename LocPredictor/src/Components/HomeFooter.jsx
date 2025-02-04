import React from "react";
import "./HomeFooter.css";

const Footer = () => {

    return (
        <>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>E-Waste<span>Hub</span></h3>

                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">E-Waste Hub © 2023</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Walchand college of Engg.</span> Sangli, Maharashtra</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">support@e-wastehub.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </>

    );
}

export default Footer;