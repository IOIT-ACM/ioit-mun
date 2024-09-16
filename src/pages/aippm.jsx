import React from "react";
import Layouts from "@layouts/Layouts";


import HeroThreeSection from "@components/sections/HeroThree";
import AboutFourSection from "@components/sections/AboutFour";

const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event = "AIPPM"/>
      <AboutFourSection Event = "AIPPM"/>
    </Layouts>
  );
};
export default Home3;