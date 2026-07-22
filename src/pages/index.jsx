import React from "react";
import Layouts from "@layouts/Layouts";

import HeroOneSection from "@components/sections/HeroOne";
import Stats from "@components/sections/Stats";
// import ChiefGuest from "@/src/components/sections/ChiefGuest";
import CommitteesScrollStack from "@components/sections/CommitteesScrollStack";
// import TeamSection from "@components/sections/Team";
import VideoSection from "@components/sections/Video";
import Schedule from "@components/sections/Schedule";



const Page = (props) => {
  return (
    <div style={{width: "100vw", overflowX: "hidden"}}>
      <Layouts transparent>
        <HeroOneSection />
        <CommitteesScrollStack />
        {/* <ChiefGuest /> */}
        {/* <TeamSection /> */}
        <Schedule />
        <VideoSection />
        <Stats />
      </Layouts>
    </div>
  );
};
export default Page;

