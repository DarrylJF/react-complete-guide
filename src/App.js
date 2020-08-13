// import React, { useState, Component} from 'react';
import React, { Component } from 'react';
import './App.css';
import './'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Johnson', age: 28 },
      { name: 'Abhubaka', age: 33},
      { name: 'Name 3', age: 44}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('clicked');
    // DONT DO THIS: this.state.persons[0].name = 'New Name'; (Dont update the data directly)
    this.setState( {
      persons: [
        { name: newName, age: 66 },
        { name: 'Name 2', age: 30},
        { name: 'Name 3', age: 44}
      ]
    } )
  }

  nameChangedHandler = ( event ) => {
    this.setState( {
      persons: [
        { name: 'Name 1', age: 66 },
        { name: event.target.value, age: 30},
        { name: 'Name 3', age: 44}
      ]
    } )
  }

  togglePersonsHandler = ( ) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    return (
      <div className="App">
          <h1>Title</h1>
          <button onClick={this.togglePersonsHandler}>Toggle Persons</button>

          { this.state.showPersons ? 
              <div>
                <Person
                  name={this.state.persons[0].name}
                  age={this.state.persons[0].age}>
                    MY HOBBIES ARE
                </Person>
                <Person
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                  click={() => this.switchNameHandler('ANONYMOUS ARROW FUNCTION')} // ANONYMOUS FUNCTION (dont recommend using this method if dont have to)
                  changed={this.nameChangedHandler}/>
                <Person 
                  name={this.state.persons[2].name}
                  age={this.state.persons[2].age}/>
              </div> : null
          } 
      </div>
    );
  }
}
export default App;


