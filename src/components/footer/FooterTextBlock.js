import React from 'react';
import * as styles from './FooterStyles';

function FooterTextBlock({ title, description }) {
  return (
    <styles.TextBlockContainer>
      <styles.Title>{title}</styles.Title>
      <styles.Description>{description}</styles.Description>
    </styles.TextBlockContainer>
  );
}

export default FooterTextBlock;