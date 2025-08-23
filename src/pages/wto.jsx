import React from 'react';
import Layouts from '@layouts/Layouts';

import HeroThreeSection from '@components/sections/HeroThree';
import ExecutiveBoard from '@components/sections/ExecutiveBoard';
import AboutFourSection from '@components/sections/AboutFour';

const WTO = {
  items: [
    {
      image: '/img/team/UNODC_Aaryan.png',
      name: 'Aaryan Gaur',
      role: 'Co-Chairperson, UNODC',
    },
    {
      image: '/img/team/UNODC_Yashveer.png',
      name: 'Yashveer Tiwari',
      role: 'Co-Chairperson, UNODC',
    },
  ],
};

const Home3 = (props) => {
  return (
    <Layouts invert>
      <HeroThreeSection Event="WTO" />
      <AboutFourSection Event="WTO" />
      {/* <ExecutiveBoard Content={WTO} /> */}
    </Layouts>
  );
};
export default Home3;
