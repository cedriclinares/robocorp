import React from 'react';
import Footer from '../footer/Footer';
import * as styles from './MainPageStyles';
import PageRow from './PageRow';
import BusyMonkey from '../../assets/images/busy-monkey.png';
import WorkingMonkey from '../../assets/images/working-monkey.png';
import Laptop from '../../assets/images/laptop.png';

function MainPage() {
  return (
    <>
      <styles.MainPageContainer>
        <PageRow 
          title="WHAT IS A SOFTWARE ROBOT?"
          description="Software Robots eliminate monkey work, allowing people to be more creative and more strategic"
          image={BusyMonkey}
          height={500}
          textWidth='400px'
          // imageWidth='40%'
          backgroundColor='white'
        />
        <PageRow 
          // title="BUILD AN ARMY OF ROBOTS WITH TODAY."
          // summary="Frictionless tools that are built for developers"
          description="Software Robots eliminate monkey work, allowing people to be more creative and more strategic"
          image={WorkingMonkey}
          height={500}
          showButton
          textSide='right'
          // textWidth='40%'
        />
        <PageRow 
          // title="BUILD AN ARMY OF ROBOTS WITH TODAY."
          // summary="Open for sharing and collaboration"
          description="Software Robots eliminate monkey work, allowing people to be more creative and more strategic"
          image={Laptop}
          height={500}
          // imageWidth='30%'
          // textWidth='40%'
        />
        <PageRow 
          // title="BUILD AN ARMY OF ROBOTS WITH TODAY."
          // summary="Fast and easy to devploy"
          description="Software Robots eliminate monkey work, allowing people to be more creative and more strategic"
          image={BusyMonkey}
          height={500}
          showButton
          textSide='right'
        />
      </styles.MainPageContainer>
      <Footer theme={{type: 'light'}}/>
    </>
  );
}

export default MainPage;