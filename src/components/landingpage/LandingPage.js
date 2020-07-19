import React from 'react';
import * as styles from './LandingPageStyles';
import CTAButton from '../global/Button'
import Footer from '../footer/Footer';
import ForItem from './ForItem';
import Heroes from '../../assets/images/heroes.png';
import Office from '../../assets/images/office.png';
import Coding from '../../assets/images/coding.png';
import Presentation from '../../assets/images/Presentation.png';
import Build from '../../assets/images/Build.png';

function LandingPage() {
  return (
    <>
      <styles.LandingPageContainer>
        <styles.Hero>
          <styles.Title>BE A SOFTWARE ROBOT HERO.</styles.Title>
          <CTAButton text="CTA Button" />
        </styles.Hero>
        <img
          src={Heroes}
          alt="heroes"
          width={1440}
          height={775}
        />
        <styles.ForCollection>
          <ForItem
            title="For developers"
            description="Centralized orchestration for software robots that's available with minimu setup and no maintenance"
            textColor="#A58CF7"
            image={Coding}
          />
          <ForItem
            title="For RPA experts"
            description="Centralized orchestration for software robots that's available with minimu setup and no maintenance"
            textColor="#F6BF45"
            image={Build}
          />
          <ForItem
            title="For business analysts &amp; CXOs"
            description="Centralized orchestration for software robots that's available with minimu setup and no maintenance"
            textColor="#0DCFC7"
            image={Presentation}
          />
        </styles.ForCollection>
        <img
          src={Office}
          alt="office"
          width={1440}
          height={495}
        />
      </styles.LandingPageContainer>
      <Footer theme={{type: 'dark'}}/>
    </>
  );
}

export default LandingPage;