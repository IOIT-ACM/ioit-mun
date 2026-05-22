import React from "react";
import Layouts from "@layouts/Layouts";

import HeroThreeSection from "@components/sections/HeroThree";
// import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AboutFourSection from "@components/sections/AboutFour";


// Data for the Executive Board section
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
      <HeroThreeSection Event="UNSC" />
      <AboutFourSection Event = "UNSC"/>

      {/* Commented out this section */}
      {/* <ExecutiveBoard Content={UNSC} /> */}
    </Layouts>
  );
};
export default Home3;
