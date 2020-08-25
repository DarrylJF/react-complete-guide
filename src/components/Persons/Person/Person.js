// import Radium from 'radium';
// import styled from 'styled-components';

import React from 'react';
import classes from './Person.css';

const person = ( props ) => {
    // USED TO SHOW ERROR BOUNDARY EXAMPLE
    // const rnd = Math.random();

    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }
    
    return (        
        <div className={classes.Person}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;