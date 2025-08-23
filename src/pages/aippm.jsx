import React from "react";
import Layouts from "@layouts/Layouts";

import HeroThreeSection from "@components/sections/HeroThree";
import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AboutFourSection from "@components/sections/AboutFour";

const AIPPM = {
  "items": [
    {
      "image": "/img/team/AIPPM_Saksham.png",
      "name": "Saksham Sharma",
      "role": "Moderator, AIPPM"
    },
    {
      "image": "/img/team/AIPPM_Yash.png",
      "name": "Yash Chavhan",
      "role": "Deputy Moderator, AIPPM"
    }
  ]
};


const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event = "AIPPM"/>
      <AboutFourSection Event = "AIPPM"/>
      {/* <ExecutiveBoard Content={AIPPM} /> */}
    </Layouts>
  );
};
export default Home3;