import styled from 'styled-components'
import '../../assets/fonts.css';

export const FooterContainer = styled.div`
  display: flex;
  height: 400px;
  background-color: ${props => props.theme.type === 'light' ? '#F0EEEB' : '#221822'};
`;

export const Table = styled.table`
  margin-top: 64px;
  margin-left: 330px;
  font-family: Inter;
`;

export const TR = styled.tr`
  height: 30px;
`;

export const TH = styled.th`
  color: ${props => props.theme.type === 'light' ? '#26231B' : '#E0DCE0'};
  font-size: 18px;
  text-align: left;
  width: 180px;
`;

export const TD = styled.td`
  color: ${props => props.theme.type === 'light' ? '#403D36' : '#968C96'};
  font-size: 14px;
  text-align: left;
`;

export const FooterLogo = styled.div`
  position: relative;
  top: 65px;
  left: 175px;
  width: 50px;
  height: 50px;
`;