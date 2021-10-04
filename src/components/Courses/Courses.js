import React from "react";
import "./Course.css";

const Courses = (props) => {
  const { facility, price, shift, faculty, img } = props.service || {};
  return (
    <div className="card">
      <img src={img} alt="" />
      <h1>{facility}</h1>
      <h3>${price}</h3>
      <p>
        {" "}
        {shift} <br /> {faculty}{" "}
      </p>
    </div>
  );
};

export default Courses;
