import React from 'react';
import * as styles from './PageRowStyles';
import CTAButton from '../global/Button';

function PageRow({ 
    backgroundColor,
    title,
    summary,
    description,
    image,
    height,
    justifyContent,
    textSide,
    textWidth,
    imageWidth,
    showButton,
  }) {
  return (
    <styles.PageRowContainer 
      height={height}
      backgroundColor={backgroundColor}
    >
      <styles.PageRow textSide={textSide}>
        <styles.TextContainer width={textWidth}> 
          <styles.Title>{title}</styles.Title>
          {!title && <styles.Break/> }
          <styles.Description>{description}</styles.Description>
          {showButton && (
            <div style={{ marginTop: 40 }}>
              <CTAButton text="CTA Button"/>
            </div>
          )}
        </styles.TextContainer>
        <styles.ImageContainer width={imageWidth}>
          <img src={image} alt="row_image" height={height} />
        </styles.ImageContainer>
      </styles.PageRow>
    </styles.PageRowContainer>
  );
}

export default PageRow;