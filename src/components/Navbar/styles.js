// Navbar/styles.js

import styled from "styled-components";
import filterIMG from "../../assets/images/filter_icon.png";
import menuIMG from "../../assets/images/menu_icon.png";
import font from "../../styles/fonts";

const fontFamily = font.FONTS;

export const Container = styled.nav`
  background-color: black;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const Input = styled.input`
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  width: 20px;
  height: 20px;
  margin-right: 55px;
  background-image: url(${menuIMG});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  flex-shrink: 0; /* Não encolhe */
`;

export const RightMenuButton = styled.button`
  background-color: transparent;
  border: none;
  width: 20px;
  height: 20px;
  background-image: url(${filterIMG});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  flex-shrink: 0; /* Não encolhe */
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: black;
  color: white;
  padding: 20px;
  z-index: 1000;
  font-family: ${fontFamily.FONT_100};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const SidebarItem = styled.div`
  margin-top: 20px;
  cursor: pointer;
`;


