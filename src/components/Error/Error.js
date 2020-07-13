import React from "react";
import {Card} from "react-bootstrap";
import styled from "styled-components";

const Error = ({text}) => {
  return (
    <Card data-test="errorComponent">
        <Card.Title>{text}</Card.Title>
    </Card>
  );
};

export default Error;
