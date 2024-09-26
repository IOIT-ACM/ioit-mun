import React from "react";
import Layouts from "@layouts/Layouts";

import HeroOneSection from "@components/sections/HeroOne";
import ChiefGuest from "@/src/components/sections/ChiefGuest";
import ServicesSection from "@components/sections/Services";
//import TeamSection from "@components/sections/Team";
import VideoSection from "@components/sections/Video";
import Schedule from "@components/sections/Schedule";



const Page = (props) => {
  return (
    <div style={{width: "100vw", overflowX: "hidden"}}>
      <Layouts transparent>
        <HeroOneSection />
        <ServicesSection />
        <ChiefGuest />
        {/* <TeamSection /> */}
        {/*<Schedule />*/}
        <VideoSection />
      </Layouts>
    </div>
  );
};
export default Page;

