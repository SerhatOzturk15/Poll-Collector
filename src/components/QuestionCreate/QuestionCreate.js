import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";


const StyledInput = styled(Form.Control)`
  margin: 8px 0;
`;

const QuestionCreate = ({
  handleCreateQuestion,
  buttonText,
  newQuestion,
  handleQuestionChange,
}) => {
  return (
    <Form>
      <Form.Group controlId="formGroupQuestion">
        <Form.Label>Question</Form.Label>
        <StyledInput
          name = 'question'
          type="text"
          placeholder="Enter question"
          onChange={(e) => handleQuestionChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="formGroupChoices">
        {newQuestion.choiceList.map((val, index) => {
      return <StyledInput
      type="text"
      name={`choice${index}`}
      placeholder={`Enter choice ${index + 1}`}
      onChange={(e) => handleQuestionChange(e, index)}
      value = {val}
    />
        })}
      </Form.Group>
      <Button aria-label = {buttonText} onClick={handleCreateQuestion}>{buttonText}</Button>
    </Form>
  );
};

export default QuestionCreate;
