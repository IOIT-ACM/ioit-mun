import React from "react";
import Layouts from "@layouts/Layouts";

import HeroThreeSection from "@components/sections/HeroThree";
import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AboutFourSection from "@components/sections/AboutFour";

const UNHRC = {
  "items": [
    {
      "image": "/img/team/UNHRC_Rakeysh.png",
      "name": "Rakeysh Gupta",
      "role": "Chairperson, UNHRC"
    },
    {
      "image": "/img/team/UNHRC_Rushil.png",
      "name": "Rushil Pujari",
      "role": "Vice Chairperson, UNHRC"
    }
  ]
};


const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event = "UNHRC"/>
      <AboutFourSection Event = "UNHRC"/>
      <ExecutiveBoard Content={UNHRC} />
    </Layouts>
  );
};
export default Home3;