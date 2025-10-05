import React from "react";
import Layouts from "@layouts/Layouts";

import HeroThreeSection from "@components/sections/HeroThree";
import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AboutFourSection from "@components/sections/AboutFour";

const WTO = {
  "items": [
    {
      "image": "/img/team/wto-ayush.jpg",
      "name": "Ayush Kumar",
      "role": "Co-Chairperson, WTO"
    },
    {
      "image": "/img/team/wto-aakhya.jpg",
      "name": "Aakhya Tiwari",
      "role": "Co-Chairperson, WTO"
    }
  ]
};


const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event = "WTO"/>
      <AboutFourSection Event = "WTO"/>
      <ExecutiveBoard Content={WTO} />
    </Layouts>
  );
};
export default Home3;