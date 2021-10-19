import React, { useState } from 'react';
import {
  FiMenu,
  FiX,
  FiSettings,
  FiAtSign,
  FiHome,
  FiInfo,
  FiBriefcase,
} from 'react-icons/fi';

import {
  ExploreContainer,
  ExploreItem,
  MobileMenu,
  MenuContainer,
  MenuIconContainer,
  MobileMenuItem,
  MobileMenuItemContainer,
  ItemIcon,
} from './styles';

const Toolbar: React.FC = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(true);

  return (
    <>
      <ExploreContainer>
        <MobileMenu>
          <FiMenu size="5vh" onClick={() => setMenuClicked(!menuClicked)} />
        </MobileMenu>
        <ExploreItem href="#">
          <ItemIcon>
            <FiHome />
          </ItemIcon>
          Home
        </ExploreItem>
        <ExploreItem href="#about">
          <ItemIcon>
            <FiInfo />
          </ItemIcon>
          About me
        </ExploreItem>
        <ExploreItem href="#skills">
          <ItemIcon>
            <FiSettings />
          </ItemIcon>
          Skills
        </ExploreItem>
        <ExploreItem href="#portfolio">
          <ItemIcon>
            <FiBriefcase />
          </ItemIcon>
          Portfolio
        </ExploreItem>
        <ExploreItem href="#contact">
          <ItemIcon>
            <FiAtSign />
          </ItemIcon>
          Contact me
        </ExploreItem>
        {!menuClicked && (
          <MenuContainer>
            <MenuIconContainer>
              <FiX size="5vh" onClick={() => setMenuClicked(!menuClicked)} />
            </MenuIconContainer>
            <MobileMenuItemContainer>
              <MobileMenuItem
                onClick={() => {
                  setMenuClicked(!menuClicked);
                  window.location.href = '#';
                }}
              >
                <ItemIcon>
                  <FiHome />
                </ItemIcon>
                Home
              </MobileMenuItem>
              <MobileMenuItem
                onClick={() => {
                  setMenuClicked(!menuClicked);
                  window.location.href = '#about';
                }}
              >
                <ItemIcon>
                  <FiInfo />
                </ItemIcon>
                About me
              </MobileMenuItem>
              <MobileMenuItem
                onClick={() => {
                  setMenuClicked(!menuClicked);
                  window.location.href = '#skills';
                }}
              >
                <ItemIcon>
                  <FiSettings />
                </ItemIcon>
                Skills
              </MobileMenuItem>
              <MobileMenuItem
                onClick={() => {
                  setMenuClicked(!menuClicked);
                  window.location.href = '#portfolio';
                }}
              >
                <ItemIcon>
                  <FiBriefcase />
                </ItemIcon>
                Portfolio
              </MobileMenuItem>
              <MobileMenuItem
                onClick={() => {
                  setMenuClicked(!menuClicked);
                  window.location.href = '#contact';
                }}
              >
                <ItemIcon>
                  <FiAtSign />
                </ItemIcon>
                Contact me
              </MobileMenuItem>
            </MobileMenuItemContainer>
          </MenuContainer>
        )}
      </ExploreContainer>
    </>
  );
};
export default Toolbar;
