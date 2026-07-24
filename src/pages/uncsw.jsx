import React from "react";
import Layouts from "@layouts/Layouts";

import HeroThreeSection from "@components/sections/HeroThree";
// import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AboutFourSection from "@components/sections/AboutFour";
//old data
// Data for the Executive Board section
const UNSCW = {
  "items": [
    {
      "image": "/img/team/aippm-gauravi.jpg",
      "name": "Gauravi Dubey",
      "role": "Co-Moderator, AIPPM"
    },
    {
      "image": "/img/team/aippm-aayaan.jpg",
      "name": "Aayaan Manhas",
      "role": "CO-Moderator, AIPPM"
    }
  ]
};


const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event = "UNCSW"/>
      <AboutFourSection Event = "UNCSW"/>

      {/* Commented out this section */}
      {/* <ExecutiveBoard Content={UNSCW} /> */}
    </Layouts>
  );
};
export default Home3;