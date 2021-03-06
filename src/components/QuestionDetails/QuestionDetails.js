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
      <div
        style={{ textAlign: "left", fontWeight: "bold" }}
        data-test="questionDetailsComponent"
      >
        Question: {question.question}
      </div>
      {headerList && (
        <StyledRow>
          <Col sm={4} data-test="questionDetailsHeader1">
            {headerList[0]}
          </Col>
          <Col sm={2} data-test="questionDetailsHeader2">
            {headerList[1]}
          </Col>
          <Col sm={2} data-test="questionDetailsHeader3">
            {headerList[2]}
          </Col>
          <Col sm={4} data-test="questionDetailsHeader4">
            {headerList[3]}
          </Col>
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
              data-test="choiceItem"
              onClick={() => handleSelect(choice)}
            >
              <Row>
                <Col sm={4}>{choice.choice}</Col>
                <Col sm={2} data-test="votes">
                  {choice.votes}
                </Col>
                <Col sm={2}>
                  {"%" + getPercentage(choice.votes, totalResult)}
                </Col>
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
        data-test="saveVoteButton"
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
