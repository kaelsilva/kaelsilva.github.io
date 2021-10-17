import styled from "styled-components";
import { shade } from "polished";
import AppearFromLeft from "../animations/AppearFromLeft";

export const ExploreContainer = styled.nav`
  position: fixed;
  background-color: #0388a6;
  font-family: "Roboto", sans-serif;
  color: #fff;

  display: flex;
  flex: 1;
  flex-direction: row;
  height: 8vh;
  width: 100vw;
  justify-content: space-around;
  /* padding: 40px 40px 0px 10px; */

  @media only screen and (max-width: 700px) {
    /* visibility: hidden; */
    height: 7vh;
    align-items: center;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  visibility: hidden;

  @media only screen and (max-width: 700px) {
    display: flex;
    flex: 1;
    width: 100vw;
    flex-direction: row;
    position: fixed;
    visibility: visible;
    padding-left: 8vw;
  }
`;

export const ExploreItem = styled.a`
  list-style-type: none;
  font-size: 20px;

  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  /* border-color: #fff;
  border-width: 2px;
  border-style: groove; */

  @media only screen and (max-width: 700px) {
    visibility: hidden;
  }

  &:hover {
    cursor: pointer;
    background-color: ${shade(0.2, "#0388a6")};
  }
`;

export const ItemIcon = styled.div`
  margin-right: 1vw;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  margin-top: 92vh;
  background-color: #0388a6;
  flex-direction: column;

  animation: ${AppearFromLeft} 0.5s;
`;

export const MenuIconContainer = styled.div`
  display: flex;
  height: 8vh;

  color: #fff;
  align-items: center;
  padding-right: 2vw;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MobileMenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 10vh;
  width: 100vw;

  font-family: "Roboto", sans-serif;
  font-size: 24px;
  color: #fff;

  margin-top: 2vh;
`;

export const MobileMenuItemContainer = styled.div`
  height: 80vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  padding-left: 10vw;
`;
