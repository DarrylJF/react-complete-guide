import React from 'react';
// import './Person.css';
// import Radium from 'radium';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 60%;
margin: 1rem auto;
padding: 1.5rem;
border: 1px solid rgb(50, 138, 221);
box-shadow: 0 3px 5px #ccc;
text-align: center;

@media (min-width: 500px) {
    width: 450px;
}
`;

const person = ( props ) => {
    return (
    <StyledDiv>
        <p onClick={props.click}>
            I am {props.name} and I am {props.age} years old
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
    )
};

export default person;