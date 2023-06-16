import React from "react";
import "../Footer/index.css";


function Footer(){
    return(
        <footer className= "footer d-flex">
            <div>
                <a href ="https://github.com/DustinSwecker/job-dropper" target="_blank" rel="noreferrer">
                  <img alt="Github" className="footer-img " src={require("../../assets/icons8-github-24.png")}/></a>
                <a href ="https://www.linkedin.com/company/indeed-com/" target="_blank" rel="noreferrer">
                  <img alt="Linkedin" className="footer-img" src={require("../../assets/icons8-linkedin-30.png")}/></a>
                {/* <a href ="https://www.facebook.com/junghoon.yoon.505" target="_blank" rel="noreferrer">
                  <img alt="Facebook" className="footer-img" src={require("../../assets/icons8-facebook-30.png")}/></a>                */}
            </div> 
    

            <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} - JOBDROPPER</p>
      </div>
    </footer>
  );
};

export default Footer;