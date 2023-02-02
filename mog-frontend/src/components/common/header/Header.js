import React, { useState } from 'react';
import styled from 'styled-components';
import hideMenuIcon from '../../../images/hideMenu_icon.png';
import logoImg from '../../../images/MogLogo1.png';
import Nav from './Nav';
import SideCategory from './SideCategory';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <HeaderBox>
        <TopLeftMenu>
          <HideMenu
            onClick={() => {
              //   console.log(menuOpen);
              setMenuOpen(!menuOpen);
            }}
          />
          <Logo
            onClick={() => {
              navigate('/main');
            }}
          />
        </TopLeftMenu>
        <Nav />
      </HeaderBox>
      <div style={{ display: menuOpen ? 'block' : 'none' }}>
        <SideCategory />
      </div>
    </>
  );
};

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  height: 5rem;
  padding: 1.25rem 0.7rem 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
  z-index: 100;
`;

const TopLeftMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const HideMenu = styled.div`
  width: 2rem;
  height: 100%;
  background: url(${hideMenuIcon}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    opacity: 0.6;
  }
`;

const Logo = styled.div`
  width: 4.7rem;
  height: 100%;
  background: url(${logoImg}) no-repeat center center;
  background-size: cover;
  margin-left: 1.5rem;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 612px) {
    display: none;
  }
`;
