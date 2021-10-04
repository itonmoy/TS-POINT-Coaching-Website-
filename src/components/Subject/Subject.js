import React from "react";
// import {Container,Row,Col ,Card} from 'react-bootstrap'

const Subject = (props) => {
  const { img, teacher, subject, duration, branches } = props.subject || {};
  return (
    <div className="subject-container">
      <img src={img} alt="" />
      <h1>Teacher: {teacher}</h1>
      <h3> Subject: {subject}</h3>
      <h5>
        Duration:
        {duration} <br /> Our Branches: {branches}{" "}
      </h5>
      <hr />
    </div>
  );
};

export default Subject;
