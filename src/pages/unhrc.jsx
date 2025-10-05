import React from "react";
import Layouts from "@layouts/Layouts";

import HeroThreeSection from "@components/sections/HeroThree";
import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AboutFourSection from "@components/sections/AboutFour";

const UNHRC = {
  "items": [
    {
      "image": "/img/team/unhrc-yash.jpg",
      "name": "Yash Borkar",
      "role": "Chair, UNHRC"
    },
    {
      "image": "/img/team/unhrc-rushil.jpg",
      "name": "Rushil Pujari",
      "role": "Vice Chair, UNHRC"
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