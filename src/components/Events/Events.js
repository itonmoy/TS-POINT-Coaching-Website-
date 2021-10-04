import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Event.css";

const Events = () => {
  return (
    <div>
      <Header></Header>

      <div className="bg-secondary event  text-primary">
        <h2 className="text-white ">
          We are planning to go study tour and <br /> Arrange Math olympiad on
          our coaching campus
        </h2>
        <h6>
          To join our events <br /> please stay conneceted with us
        </h6>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Events;
