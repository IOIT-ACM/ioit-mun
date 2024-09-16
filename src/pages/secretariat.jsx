import React from "react";
import Layouts from "@layouts/Layouts";


import HeroTwoSection from "@components/sections/HeroTwo"


const Home2 = (props) => {

  const Content = {
    "subtitle": "Team Members",
    "title": "Meet Our Team",
    "description": "",
    "items": [
      {
        "image": "img/team/Anshika.jpg",
        "name": "Anshika Singh",
        "role": "Deputy Secretary General"
      },
      {
        "image": "img/team/Sharvin.jpg",
        "name": "Sharvin Shah",
        "role": "Chief of GA affairs and Conference Management"
      },
      {
        "image": "img/team/Avinash.jpg",
        "name": "Avinash Patil",
        "role": "Chief of Economic and Social Affiars"
      },
      {
        "image": "img/team/Anushka.jpg",
        "name": "Anushka Mane",
        "role": "USG Sponsors"
      },
      {
        "image": "img/team/Devang.jpg",
        "name": "Devang Gandhi",
        "role": "Finance Head"
      },
      {
        "image": "img/team/Aarya.png",
        "name": "Aarya Patil",
        "role": "USG for Global Communications"
      },
      {
        "image": "img/team/Atharva.jpg",
        "name": "Atharva Nawale",
        "role": "USG Marketing"
      },
      {
        "image": "img/team/Chaitali.jpg",
        "name": "Chaitali Khachane",
        "role": "USG Delegate Affairs"
      },
      {
        "image": "img/team/Yash.jpg",
        "name": "Yash Chavhan",
        "role": "USG Delegate Affairs"
      },
      {
        "image": "img/team/Nidhi.jpg",
        "name": "Nidhi Warishe",
        "role": "USG Creative"
      },
      {
        "image": "img/team/Khushi.jpg",
        "name": "Khushi Chauhan",
        "role": "USG Management"
      },
      {
        "image": "img/team/Ankita.png",
        "name": "Ankita Kamat",
        "role": "Head IP"
      },
      {
        "image": "img/team/Gargi.jpg",
        "name": "Gargi Bharshankar",
        "role": "Chief in editor"
      },
      {
        "image": "img/team/Kartik.jpg",
        "name": "Kartik Yeole",
        "role": "Website Head"
      },
      {
        "image": "img/team/Hariom.jpg",
        "name": "Hariom Malode",
        "role": "Documentation Head"
      },
      {
        "image": "img/team/Prajwal.jpg",
        "name": "Prajwal Wazade",
        "role": "Technical Head"
      },
      {
        "image": "img/team/Laukik.jpg",
        "name": "Laukik Patil",
        "role": "Material Acquisition Head"
      }
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
                    <img src={item.image} alt={item.name} style={{'objectPosition': 'top' }} />
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
