// import React, { useState, Component} from 'react';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';



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
    let persons = null;
    let btnClass = '';
    

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
          })
          }
          </div> 
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
            Toggle Person
          </StyledButton> */}
          <button className={btnClass} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
      </div>
    );
  }
}

export default App;
// export default Radium(App);


