import React from "react";
import Layouts from "@layouts/Layouts";

import HeroThreeSection from "@components/sections/HeroThree";
import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AboutFourSection from "@components/sections/AboutFour";

const UNODC = {
  "items": [
    {
      "image": "img/team/Aaryan.jpg",
      "name": "Aaryan Gaur",
      "role": "Co-Chairperson, UNODC"
    },
    {
      "image": "img/team/Yashveer.jpg",
      "name": "Yashveer Tiwari",
      "role": "Co-Chairperson, UNODC"
    }
  ]
};


const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event = "UNODC"/>
      <AboutFourSection Event = "UNODC"/>
      {/* <ExecutiveBoard Content={UNODC} /> */}
    </Layouts>
  );
};
export default Home3;