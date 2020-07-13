import React, { useState } from "react";
import styled from "styled-components";
import { Card, Row, Col, Button } from "react-bootstrap";

const StyledCard = styled(Card)`
  min-width: 300px;
  color: gray;
  cursor: pointer;
  padding: 12px;
  border: 1px solid gray;
  margin: 8px 0px;
  &:hover {
    color: black;
  }
`;

const StyledLabel = styled.label`
  flex: 1;
`;

const StyledRow = styled(Row)`
  @media (max-width: 576px) {
    display: none;
  }
`;

const QuestionDetails = ({
  question = {},
  buttonText,
  handleVote,
  headerList,
}) => {
  const [selectedChoice, setSelectedChoice] = useState({});

  const handleSelect = (choice) => {
    setSelectedChoice(choice);
  };

  const getPercentage = (partialValue, totalValue) => {
    return totalValue === 0
      ? 0
      : ((100 * partialValue) / totalValue).toFixed(2);
  };

  let totalResult = 0;
  if (question.choices) {
    totalResult = question.choices.reduce((acc, choice) => {
      return (acc += choice.votes);
    }, 0);
  }

  return (
    <>
      <div style={{ textAlign: "left", fontWeight: "bold" }}>
        Question: {question.question}{" "}
      </div>
      {headerList && (
        <StyledRow>
          <Col sm={4}>{headerList[0]}</Col>
          <Col sm={2}>{headerList[1]}</Col>
          <Col sm={2}>{headerList[2]}</Col>
          <Col sm={4}>{headerList[3]}</Col>
        </StyledRow>
      )}
      {question.choices &&
        question.choices.map((choice, index) => {
          return (
            <StyledCard
              key={choice.url}
              style={{
                backgroundColor:
                  selectedChoice.url === choice.url ? "lightseagreen" : "",
              }}
              onClick={() => handleSelect(choice)}
            >
              <Row>
                <Col sm={4}>{choice.choice}</Col>
                <Col sm={2}>{choice.votes}</Col>
                <Col sm={2}>{"%" + getPercentage(choice.votes, totalResult)}</Col>
                <Col sm={4}>
                  {selectedChoice.url === choice.url
                    ? "Selected"
                    : "Not Selected"}
                </Col>
              </Row>
            </StyledCard>
          );
        })}
      <Button
        aria-label={buttonText}
        onClick={() => {
          handleVote(selectedChoice);
        }}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default QuestionDetails;
