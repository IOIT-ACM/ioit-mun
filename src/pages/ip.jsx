import React from "react";
import Layouts from "@layouts/Layouts";

import HeroThreeSection from "@components/sections/HeroThree";
import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AboutFourSection from "@components/sections/AboutFour";

const IP = {
  "items": [
    {
      "image": "/img/team/ip-devika.jpg",
      "name": "Devika Mule",
      "role": "Editor-in-chief, IP"
    },
    {
      "image": "/img/team/ip-atharva.jpg",
      "name": "Atharva Boite",
      "role": "Official Photographer, IP"
    }
  ]
};


const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event = "IP"/>
      <AboutFourSection Event = "IP"/>
      <ExecutiveBoard Content={IP} />
    </Layouts>
  );
};
export default Home3;