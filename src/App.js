// import React, { useState, Component} from 'react';
import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium'; 
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

    &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
`;

class App extends Component {
  state = { // this is the data source (in bigger applications this data will be fetched from a server)
    persons: [
      { id: 1, name: 'Johnson', age: 28 },
      { id: 2, name: 'Abhubaka', age: 33},
      { id: 3, name: 'Name 3', age: 44}
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(prson => {
      return prson.id === id;
    });
    

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]; // create a reference to persons state array
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  togglePersonsHandler = ( ) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonhandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map(( person, index ) => {
            return <Person 
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                    click={() => this.deletePersonhandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}/>
          })}
          </div> 
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
            Toggle Person
          </StyledButton>
          {persons}
      </div>
    );
  }
}

export default App;
// export default Radium(App);


