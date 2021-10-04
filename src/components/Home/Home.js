import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Subjects from "../Subjects/Subjects";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Subjects></Subjects>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
