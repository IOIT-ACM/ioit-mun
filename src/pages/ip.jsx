import React from "react";
import Layouts from "@layouts/Layouts";

import HeroThreeSection from "@components/sections/HeroThree";
import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AboutFourSection from "@components/sections/AboutFour";

const IP = {
  "items": [
    {
      "image": "/img/team/IP_Anvitha.png",
      "name": "Anvitha Mayya",
      "role": "Editor-in-chief, IP"
    },
    {
      "image": "/img/team/IP_Ankita.png",
      "name": "Ankita Kamat",
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