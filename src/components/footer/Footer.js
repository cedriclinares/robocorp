import React from 'react';
import { ThemeProvider } from 'styled-components'
import * as styles from './FooterStyles';
import DarkLogo from '../../assets/images/logo.png';
import LightLogo from '../../assets/images/logo-dark.png';

function Footer({ theme }) {
  return (
    <ThemeProvider theme={theme}>
      <styles.FooterContainer>
        <styles.FooterLogo>
          <img
            src={theme.type === 'light' ? LightLogo : DarkLogo}
            alt="logo"
            width={45}
            height={40}
          />
        </styles.FooterLogo>
        <styles.Table>
          <styles.TR>
            <styles.TH>Knowledge Base</styles.TH>
            <styles.TH>Resources</styles.TH>
            <styles.TH>Community</styles.TH>
            <styles.TH>Robocorp Suite</styles.TH>
            <styles.TH>Robocorp.com</styles.TH>
          </styles.TR>
          <styles.TR>
            <styles.TD>Quickstart guide</styles.TD>
            <styles.TD>Tools</styles.TD>
            <styles.TD>Forum</styles.TD>
            <styles.TD>Robocode</styles.TD>
            <styles.TD>About</styles.TD>
          </styles.TR>
          <styles.TR>
            <styles.TD>Tutorials</styles.TD>
            <styles.TD>Documentation</styles.TD>
            <styles.TD>Slack</styles.TD>
            <styles.TD>Robocloud</styles.TD>
            <styles.TD>News</styles.TD>
          </styles.TR>
          <styles.TR>
            <styles.TD>Articles</styles.TD>
            <styles.TD>Libraries</styles.TD>
            <styles.TD>Events</styles.TD>
            <styles.TD></styles.TD>
            <styles.TD>Careers</styles.TD>
          </styles.TR>
        </styles.Table>
      </styles.FooterContainer>
    </ThemeProvider>
  );
}

export default Footer;