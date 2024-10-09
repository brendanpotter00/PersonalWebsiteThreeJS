import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 31, 63, 0.8); // Semi-transparent dark blue
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderText = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderText>Brendan Potter</HeaderText>
      <NavLinks>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;