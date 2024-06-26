// Navbar/index.jsx

import React from "react";
import {
  Container,
  LeftMenu,
  RightMenu,
  SearchInput,
  Input,
  MenuButton,
  RightMenuButton,
  Sidebar,
  CloseButton,
  SidebarItem, 
} from "./styles";

const Navbar = ({
  isSidebarOpen,
  toggleSidebar,
  showSearchInput,
  searchValue,
  handleSearchChange,
  handleEnterPress,
  showRightMenu,
  toggleFilter,
  handleHomeClick, 
  handleStudentsClick, 
}) => {
  return (
    <Container>
      <LeftMenu>
        <MenuButton onClick={toggleSidebar}></MenuButton>
        {showSearchInput && (
          <SearchInput>
            <Input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyPress={handleEnterPress}
              placeholder="Pesquisar Nomes"
            />
          </SearchInput>
        )}
      </LeftMenu>

      {showRightMenu && (
        <RightMenu>
          <RightMenuButton onClick={toggleFilter}></RightMenuButton>
        </RightMenu>
      )}

      {isSidebarOpen && (
        <Sidebar>
          <CloseButton onClick={toggleSidebar}>X</CloseButton>
          <SidebarItem onClick={handleHomeClick}>Home</SidebarItem> {/* Item "Home" */}
          <SidebarItem onClick={handleStudentsClick}>Alunos</SidebarItem> {/* Item "Alunos" */}
        </Sidebar>
      )}
    </Container>
  );
};

export default Navbar;


