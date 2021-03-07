import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Button = styled.button`
  border-style: solid;
  border-width: 1px;
  padding: 1px 7px 2px;
  text-rendering: auto;
  color: initial;
  display: inline-block;
  text-align: start;
  margin: 5px;
  border-radius: 5px;

  &:hover {
    background: #1d49aa;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }
`;

const FeedbackOptions = ({ options, handleCounter }) => {
  return (
    <>
      {options.map(option => (
        <Button
          key={shortid.generate()}
          type="button"
          name={option}
          onClick={handleCounter}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleCounter: PropTypes.func.isRequired,
};

export default FeedbackOptions;
