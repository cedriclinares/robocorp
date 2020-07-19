import React, { useState } from 'react';
import * as styles from './HeaderStyles';
import logo from '../../assets/images/logo-dark.png';
import search from '../../assets/images/search.png'

function Header() {
  const [selected, setSelected] = useState("Products");
  
  const renderHeaderLinks = () => {
    const links = ["Products", "Pricing", "Company", "Careers"];
    return links.map(link => {
      return (
        <styles.HeaderLink 
          key={link}
          onClick={() => setSelected(link)}
          selected={link === selected}
        >
          {link}
        </styles.HeaderLink>
      )
    })
  } 

  return (
    <styles.HeaderContainer>
      <styles.LogoContainer>
      <img 
        src={logo}
        alt="logo"
        height={40}
        width={45}
        style={{ paddingLeft: 48, paddingRight: 48 }}
      />
        <styles.LeftHeaderContainer>
          <img
            src={search}
            alt="search"
            width={18}
            height={18}
            style={{ paddingRight: 8}}
          />
          <styles.HeaderInput 
            type='text' 
            placeholder='Search'
            style={{ backgroundColor: 'black', color: 'white', height: 32, padding: 0, border: 'none' }}
          />
        </styles.LeftHeaderContainer>
      </styles.LogoContainer>
      <styles.LinkContainer>
        {renderHeaderLinks()}
        <styles.UserContainer>
          <styles.Username>Emma Smith-Johansson</styles.Username>
          <styles.UserTitle>Monkey Whisperer</styles.UserTitle>
        </styles.UserContainer>
      </styles.LinkContainer>
    </styles.HeaderContainer>
  );
}

export default Header;