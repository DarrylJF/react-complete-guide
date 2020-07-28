import React, { useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personState, setPersonsState ] = useState({
    persons: [
      { name: "J", age: 33 },
      { name: "B", age: 21 },
      { name: "G", age: 22}
  ],
  });

  const [ otherState, setOtherState ] = useState('some other state')

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonsState( {
      persons: [
        { name: "T", age: 37 },
        { name: "B", age: 21 },
        { name: "G", age: 23}
      ]
    });
  };


  return (
      <div className="App">
        <h1>this is a test</h1>
          <p>this is a paragraph</p>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
          <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
          <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
      </div>
    );
   // JSX, compiles to
   // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'does this work now'));
  
}

export default app;
