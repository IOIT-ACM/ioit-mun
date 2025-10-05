import React from "react";
import Layouts from "@layouts/Layouts";

import HeroThreeSection from "@components/sections/HeroThree";
import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AboutFourSection from "@components/sections/AboutFour";

const UNSC = {
  "items": [
    {
      "image": "/img/team/unsc-abhirav.jpg",
      "name": "Abhirav Sharma",
      "role": "Chair, UNSC"
    },
    {
      "image": "/img/team/unsc-tanishqa.jpg",
      "name": "Tanishqa Jadhav",
      "role": "Vice-Chair, UNSC"
    }
  ]
};


const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event = "UNSC"/>
      <AboutFourSection Event = "UNSC"/>
      <ExecutiveBoard Content={UNSC} />
    </Layouts>
  );
};
export default Home3;
