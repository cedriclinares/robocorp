import styled from 'styled-components';
import '../../assets/fonts.css';

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F2F0ED;
  font-family: Guida;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  padding-bottom: 18px;
`;

export const Title = styled.div`
  font-size: 120px;
  font-weight: bold;
`;

export const ForCollection = styled.div`
  backgroud-color: #E5E5E5;
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  padding-bottom: 100px;
  padding-left: 35px;
  padding-right: 35px;
`;

export const ForItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 40px;
`;

export const ForTitle = styled.div`
  font-size: 32px;
  padding-top: 24px;
`;

export const ForDescription = styled.div`
  color: ${props => props.color};
  font-size: 14px;
  font-family: Inter;
  line-height: 160%;
  padding-top: 20px;
  padding-bottom: 32px;
  text-align: left;
`;

export const ForImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

