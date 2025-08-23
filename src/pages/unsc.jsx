import React from 'react';
import Layouts from '@layouts/Layouts';

import HeroThreeSection from '@components/sections/HeroThree';
import ExecutiveBoard from '@components/sections/ExecutiveBoard';
import AboutFourSection from '@components/sections/AboutFour';

const UNSC = {
  items: [
    {
      image: '/img/team/UNSC_Aashay.png',
      name: 'Aashay Inamdar',
      role: 'President, UNSC',
    },
    {
      image: '/img/team/UNSC_Yash.png',
      name: 'Yash Borkar',
      role: 'Vice President, UNSC',
    },
  ],
};

const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event="UNSC" />
      <AboutFourSection Event="UNSC" />
      {/* <ExecutiveBoard Content={UNSC} /> */}
    </Layouts>
  );
};
export default Home3;
