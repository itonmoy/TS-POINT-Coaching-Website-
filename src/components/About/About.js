import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./About.css";

const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="about-us bg-secondary">
        <h2 className="text-white">
          {" "}
          To know more About us please contact to our officicals <br />{" "}
          <i class="fab fa-facebook-square"> Facebook</i> <br />{" "}
          <i class="fas fa-phone-volume"> call us </i>{" "}
        </h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
