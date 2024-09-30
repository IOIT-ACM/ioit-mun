import React from "react";
import Layouts from "@layouts/Layouts";
import Image from "next/image";

import HeroTwoSection from "@components/sections/HeroTwo"


const Home2 = (props) => {

  const Content = {
    "subtitle": "Team Members",
    "title": "Meet Our Team",
    "description": "",
    "items": [
      {
        "image": "/img/secretariat/Sejal_Barshikar.jpeg",
        "name": "Sejal Barshikar",
        "role": "USG Global Communications"
      },
      {
        "image": "/img/secretariat/Aditya_Sarade.jpeg",
        "name": "Aditya Sarade",
        "role": "Deputy Secretary General"
      },
      {
        "image": "/img/secretariat/Atharv_Pednekar.jpeg",
        "name": "Atharva Pednekar",
        "role": "USG Technical"
      },
      {
        "image": "/img/secretariat/Chinmay_Nakwa.jpeg",
        "name": "Chinmay Nakwa",
        "role": "USG Delegate Affairs"
      },
      {
        "image": "/img/secretariat/Devang_Gandhi.jpeg",
        "name": "Devang Gandhi",
        "role": "USG Finance"
      },
      {
        "image": "/img/secretariat/Sajal_Gulati.jpeg",
        "name": "Sajal Gulati",
        "role": "Chief Advisor"
      },
      {
        "image": "/img/secretariat/Shriya_Naphade.jpeg",
        "name": "Shriya Naphade",
        "role": "USG Delegate Affairs"
      },
      {
        "image": "/img/secretariat/Tanisha_Londhe.jpeg",
        "name": "Tanisha Londhe",
        "role": "USG Management"
      },
    ]
  }



  return (
    <div style={{width: "100%" ,overflowX:"hidden"}}>
    <Layouts invert>
      <HeroTwoSection />


<div className="container mil-content-frame mil-appearance mil-p-120-90">

<div className="row justify-content-between mil-mb-120">
    <div className="col-lg-5">
        <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.subtitle}</span>
        <h3 className="mil-appearance mil-mb-30" dangerouslySetInnerHTML={{__html : Content.title}} />
    </div>
    <div className="col-lg-6">
        <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{Content.description}</p>

        <div className="mil-deco mil-appearance"></div>
    </div>
</div>

<div className="row">
    {Content.items.map((item, key) => (
    <div className="col-xl-3 col-lg-4 col-md-6" key={`team-item-${key}`}>

        {/* team card */}
        <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
            <div className="mil-cover mil-long">
                <div className="mil-image-frame">
                    {/* portrait */}
                    <Image src={item.image} alt={item.name} style={{'objectPosition': 'top' }} fill/>
                </div>
            </div>
            <div className="mil-overlay mil-with-bg mil-text-center">
                <div className="mil-description">
                    {/* name */}
                    <h5>{item.name}</h5>
                    {/* post */}
                    <span className="mil-link mil-softened-50">{item.role}</span>
                </div>
            </div>
        </div>
        {/* team card end */}

    </div>
    ))}
</div>
</div>



    </Layouts>
   </div>
  );
};
export default Home2;
