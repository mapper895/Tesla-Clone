import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  return (
    <Container>
      <a href="">
        <img src="img/logo.svg" alt="logo" />
      </a>
      <Menu>
        <a href="">Model S</a>
        <a href="">Model 3</a>
        <a href="">Model X</a>
        <a href="">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <Hamb />
      </RightMenu>
      <BurgerNav>
        <CloseWrapper>
          <CloseButton />
        </CloseWrapper>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-in</a>
        </li>
        <li>
          <a href="">Cybertruck</a>
        </li>
        <li>
          <a href="">Roadaster</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const Hamb = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;

export default Header;
