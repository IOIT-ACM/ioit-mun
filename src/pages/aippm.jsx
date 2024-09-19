import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroThreeSection from "@components/sections/HeroThree";
import ExecutiveBoard from "@components/sections/ExecutiveBoard";
import AwardsSection from "@components/sections/Awards";
import AboutFourSection from "@components/sections/AboutFour";
import CountersSection from "@components/sections/Counters";
import SubscribeSection from "@components/sections/Subscribe";
import LatestPostsSection from "@components/sections/LatestPosts";

const InstagramSlider = dynamic( () => import("@components/sliders/Instagram"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const ProjectsSlider = dynamic( () => import("@components/sliders/Projects"), { ssr: false } );

const AIPPM = {
  "items": [
    {
      "image": "img/team/Saksham.jpg",
      "name": "Saksham Sharma",
      "role": "Moderator, AIPPM"
    },
    {
      "image": "img/team/YashC.jpg",
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