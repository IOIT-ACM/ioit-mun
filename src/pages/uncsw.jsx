import React from 'react';
import Layouts from '@layouts/Layouts';

import HeroThreeSection from '@components/sections/HeroThree';
import ExecutiveBoard from '@components/sections/ExecutiveBoard';
import AboutFourSection from '@components/sections/AboutFour';

const UNCSW = {
  items: [
    {
      image: '/img/team/UNCSW_Chinmay.png',
      name: 'Chinmay Bambarkar',
      role: 'Chairperson, UNCSW',
    },
    {
      image: '/img/team/UNCSW_Jitisha.png',
      name: 'Jitisha Hiremath',
      role: 'Rapporteur, UNCSW',
    },
  ],
};

const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event="UNCSW" />
      <AboutFourSection Event="UNCSW" />
      {/* <ExecutiveBoard Content={UNCSW} /> */}
    </Layouts>
  );
};
export default Home3;
