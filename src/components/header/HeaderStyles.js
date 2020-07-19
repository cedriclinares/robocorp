import styled, { css } from 'styled-components';
import '../../assets/fonts.css';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 104px;
  background-color: white;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLink = styled.div`
  ${props => props.selected ? ClickedHeaderLink : NormalHeaderLink}
`;

export const NormalHeaderLink = css`
  color: #B5ACB5;
  margin: 0px 24px;
  font-family: Inter;
  :hover {
    cursor: pointer;
  }
`;

export const ClickedHeaderLink = css`
  color: #F5F3F5;
  border-bottom: solid 4px #7850FA;
  padding: 8px 0px;
  margin: 0px 24px;
  font-family: Inter;
  :hover {
    cursor: pointer;
  }
`;

export const Button = styled.div`
  background-color: ${props => props.backgroundColor};
  color: white;
  padding: 8px 12px;
  margin: 0px 8px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-left: 48px;
  padding-right: 128px;
`;

export const Username = styled.div`
  color: #E0DCE0;
  font-size: 12px;
`;

export const UserTitle = styled.div`
  color: #F6BF45;
  font-size: 12px;
`;

export const LeftHeaderContainer = styled.div`
   display: flex;
   align-items: center;
   border-radius: 2px;
   background-color: black;
   padding-left: 8px;
`;

export const HeaderInput = styled.input`
    background-color: black;
    color: white;
    height: 32px;
    padding: 0px 0px 0px 4px;
    border: none;
    :focus {
      outline: none;
    }
`;