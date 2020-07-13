import React from "react";
import styled from "styled-components";
import { default as AlertComp } from "react-bootstrap/Alert";

const StyledAlert = styled(AlertComp)`
  position: fixed;
  right: 10px;
  bottom: 10px;
`;

const Alert = ({ alert }) => {
  return (
    <StyledAlert variant={alert.type} data-test="alertComponent">
      {alert.text}
    </StyledAlert>
  );
};

export default Alert;
