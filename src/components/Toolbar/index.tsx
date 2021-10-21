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
        <ExploreItem to="/">
          <ItemIcon>
            <FiHome />
          </ItemIcon>
          Home
        </ExploreItem>
        <ExploreItem to="/about">
          <ItemIcon>
            <FiInfo />
          </ItemIcon>
          About me
        </ExploreItem>
        <ExploreItem to="/skills">
          <ItemIcon>
            <FiSettings />
          </ItemIcon>
          Skills
        </ExploreItem>
        <ExploreItem to="/portfolio">
          <ItemIcon>
            <FiBriefcase />
          </ItemIcon>
          Portfolio
        </ExploreItem>
        <ExploreItem to="/contact">
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
                to="/"
                onClick={() => {
                  setMenuClicked(!menuClicked);
                }}
              >
                <ItemIcon>
                  <FiHome />
                </ItemIcon>
                Home
              </MobileMenuItem>
              <MobileMenuItem
                to="/About"
                onClick={() => {
                  setMenuClicked(!menuClicked);
                }}
              >
                <ItemIcon>
                  <FiInfo />
                </ItemIcon>
                About me
              </MobileMenuItem>
              <MobileMenuItem
                to="/skills"
                onClick={() => {
                  setMenuClicked(!menuClicked);
                }}
              >
                <ItemIcon>
                  <FiSettings />
                </ItemIcon>
                Skills
              </MobileMenuItem>
              <MobileMenuItem
                to="/portfolio"
                onClick={() => {
                  setMenuClicked(!menuClicked);
                }}
              >
                <ItemIcon>
                  <FiBriefcase />
                </ItemIcon>
                Portfolio
              </MobileMenuItem>
              <MobileMenuItem
                to="/contact"
                onClick={() => {
                  setMenuClicked(!menuClicked);
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
