import React from 'react';
import styled from 'styled-components'

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

const FeedbackOptions = ({onCounterGood,onCounterNeutral,onCounterBad})=>(
<div className="Counter">
        <Button type="button" onClick={onCounterGood}>Good</Button>
        <Button type="button" onClick={onCounterNeutral}>Neutral</Button>
        <Button type="button" onClick={onCounterBad}>Bad</Button>
</div>
)
export default FeedbackOptions;