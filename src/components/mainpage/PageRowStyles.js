import styled, { css } from 'styled-components'
import '../../assets/fonts.css';

export const PageRowContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;

  width: 100%;
  ${props => props.height && css`
    height: ${props.height}px;
  `}
  ${props => props.backgroundColor && css`
    background-color: ${props.backgroundColor};
  `}
`;

export const PageRow = styled.div`
  display: flex;
  flex-direction: ${props => props.textSide === 'right' ? 'row-reverse' : 'row' };
  justify-content: space-between;
  padding: 0px 150px;
`;

export const ImageContainer = styled.div`
  ${props => props.width && css`
    width: ${props.width};
  `}
`;

export const TextContainer = styled.div`
  padding: 0px 32px;
  display: flex;
  font-family: Guida;
  flex-direction: column;
  justify-content: center;
  ${props => props.width && css`
    width: ${props.width};
  `}
`;

export const Title = styled.div`
  font-size: 90px;
  
  text-align: left;
  font-weight: bold;
  padding-bottom: 12px;
`;

export const Break = styled.hr`
  margin-bottom: 40px;
  width: 100%;
`;

export const Description = styled.div`
  font-size: 24px;
  text-align: left;
`;

export const CTAButton = styled.div`
  border-radius: 2px;
  width: 108px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F5F3F5; 
  background-color: #7850FA;
  padding: 8px 16px;
  margin-top: 40px;
  :hover {
    cursor: pointer;
  }
`;