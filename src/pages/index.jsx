import React from "react";
import Layouts from "@layouts/Layouts";
import Image from "next/image";

import Hero2026Section from "@components/sections/Hero2026";
// import ChiefGuest from "@/src/components/sections/ChiefGuest";
import CommitteesScrollStack from "@components/sections/CommitteesScrollStack";
// import TeamSection from "@components/sections/Team";
import VideoSection from "@components/sections/Video";
import Schedule from "@components/sections/Schedule";
import RegisterCta from "@components/sections/RegisterCta";



const Page = (props) => {
  return (
    <div style={{width: "100vw", overflowX: "hidden"}}>
      <Layouts staticNav>
        <Hero2026Section />
        <CommitteesScrollStack />
        {/* <ChiefGuest /> */}
        {/* <TeamSection /> */}
        <div style={{ position: "relative" }}>
          {/* curtain spans Schedule -> footer bottom, clipped at footer by Layouts */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "calc(95% + 250vh)", zIndex: 0, overflow: "hidden", pointerEvents: "none", backgroundColor: "rgba(10, 22, 36, 1)" }}>
            <style>{`
              @keyframes ctaSilkDrift {
                0%   { transform: translate(-50%, -50%) rotate(90deg) scale(1) translateY(0); }
                100% { transform: translate(-50%, -50%) rotate(90deg) scale(1.08) translateY(-2%); }
              }
              .cta-silk-stage {
                animation: ctaSilkDrift 18s ease-in-out infinite alternate;
              }
            `}</style>
            <div
              className="cta-silk-stage"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "65%",
                height: "65%",
                transform: "translate(-50%, -50%) rotate(90deg)",
              }}
            >
              <Image
                src="/img/hero/flying-red-silk.png"
                alt="Curtain"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: 0.35,
                }}
              />
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <Schedule />
            <VideoSection />
            <div style={{ marginTop: 100 }}>
              <RegisterCta />
            </div>
          </div>
        </div>
      </Layouts>
    </div>
  );
};
export default Page;

