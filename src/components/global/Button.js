import React from 'react';
import styled from 'styled-components';
import '../../assets/fonts.css';

const CTAButton = styled.div`
  border-radius: 2px;
  width: 108px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F5F3F5; 
  background-color: #7850FA;
  padding: 8px 16px;
  font-family: Inter;
  :hover {
    cursor: pointer;
  }
`;

function Button({ text }) {
  return (
    <CTAButton>{text}</CTAButton>
  );
}

export default Button;