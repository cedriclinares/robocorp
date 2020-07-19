import React from 'react';
import * as styles from './LandingPageStyles';
import CTAButton from '../global/Button';

function ForItem({image, title, description, textColor}) {
  return (
    <styles.ForItemContainer>
      <styles.ForImageContainer>
        <img
          src={image}
          alt="for_image"
          width={320}
          height={240}
        />
      </styles.ForImageContainer>
      <hr style={{ width: '100%' }}/>
      <styles.ForTitle>{title}</styles.ForTitle>
      <styles.ForDescription color={textColor}>{description}</styles.ForDescription>
      <CTAButton text="CTA Button"/>
    </styles.ForItemContainer>
  );
}

export default ForItem;