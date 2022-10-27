import React from "react";
import Carousel from "../../components/Corousel";
import About from "../../components/About";
import Campaigns from "../../components/Campaigns";
import MenuWrapper from "../../components/product/MenuWrapper";
import Reservation from "../../components/Reservation";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};

export default Index;
