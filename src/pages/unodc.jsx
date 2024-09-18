import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroThreeSection from "@components/sections/HeroThree";
import AwardsSection from "@components/sections/Awards";
import AboutFourSection from "@components/sections/AboutFour";
import CountersSection from "@components/sections/Counters";
import SubscribeSection from "@components/sections/Subscribe";
import LatestPostsSection from "@components/sections/LatestPosts";
import ExecutiveBoard from "../components/sections/ExecutiveBoard";

const InstagramSlider = dynamic( () => import("@components/sliders/Instagram"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const ProjectsSlider = dynamic( () => import("@components/sliders/Projects"), { ssr: false } );

const UNODC = {
  "items": [
    {
      "image": "img/team/Aaryan.jpg",
      "name": "Aaryan Gaur",
      "role": "Co-Chairperson, UNODC"
    },
    {
      "image": "img/team/Yashveer.jpg",
      "name": "Yashveer Tiwari",
      "role": "Co-Chairperson, UNODC"
    }
  ]
};


const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event = "UNODC"/>
      <AboutFourSection Event = "UNODC"/>
      <ExecutiveBoard Content={UNODC} />
      {/* <CountersSection />
      <ProjectsSlider projects={props.projects} />
      <PartnersSlider />
      <AwardsSection />
      <LatestPostsSection posts={props.posts} layout={2} imageHorizontal />
      <SubscribeSection />
      <InstagramSlider /> */}
    </Layouts>
  );
};
export default Home3;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects
    }
  }
}