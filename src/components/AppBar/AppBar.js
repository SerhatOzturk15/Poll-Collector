import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  justify-content: center;
`;


const AppBar = ({ title }) => {
  return (
    <StyledNavbar bg="dark" variant="dark"  data-test="appBarComponent">
      <Navbar.Brand aria-label="home page" href="/">{title}</Navbar.Brand>
    </StyledNavbar>
  );
};

export default AppBar;