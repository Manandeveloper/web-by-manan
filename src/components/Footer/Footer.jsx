import CurrentDate from "../Date";
const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="wrap">
                    <div className="left-wrap">
                        <p className="copyright">
                            © 2025 Web By Manan. All Rights Reserved
                        </p>
                        <p className="time">
                            <CurrentDate/>
                        </p>
                    </div>
                    <div className="right-wrap">
                        <div className="email">
                            <a href="mailto:mananpatel14052@gmail.com">mananpatel14052@gmail.com</a>
                        </div>
                        <div className="contact-no">
                            <a href="tel:8849996349">8849996349</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;