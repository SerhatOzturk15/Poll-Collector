import React from "react";
import styled from "styled-components";
import { CardGroup, Card, Button } from "react-bootstrap";

const StyledCard = styled(Card)`
  min-width: 300px;
  color: gray;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 0 4px;
  &:hover {
    color: black;
  }
`;

const StyledTitle = styled(Card.Title)`
  min-height: 52px;
`;

const StyledButton = styled(Button)`
  margin: 12px;
`;

const QuestionList = ({
  questions = [],
  handleQuestionClick,
  routeNewQuestion,
  buttonText,
}) => {

  const getConvertedDate = (isoFormat) => {
    let date = new Date(isoFormat);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
  
    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
  
    return year + "-" + month + "-" + dt;
  };

  return (
    <>
      <h3 style={{ padding: "16px" }} data-test="questionListComponent">
        Questions
      </h3>
      <StyledButton
        aria-label={buttonText}
        onClick={routeNewQuestion}
        data-test="createQuestionButton"
      >
        {buttonText}
      </StyledButton>
      <CardGroup>
        {questions.map((question, index) => {
          return (
            <StyledCard
              key={index}
              onClick={() => handleQuestionClick(question.url)}
              data-test="questionListItem"
            >
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <StyledTitle>{question.question}</StyledTitle>
                <Card.Text data-test="questionListChoices">
                  {`Number of Choices : ${question.choices.length}`}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {getConvertedDate(question.published_at)}
                </small>
              </Card.Footer>
            </StyledCard>
          );
        })}
      </CardGroup>
    </>
  );
};

export default QuestionList;
