// import React, { useState, Component} from 'react';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = { // this is the data source (in bigger applications this data will be fetched from a server)
    persons: [
      { id: 1, name: 'Johnson', age: 28 },
      { id: 2, name: 'Abhubaka', age: 33},
      { id: 3, name: 'Name 3', age: 44}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
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
    console.log('[App.js] render');
    let persons = null;
    
    if ( this.state.showPersons ) {
      persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonhandler}
                  changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
          <Cockpit
            title={this.props.appTitle} 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
      </div>
    );
  }
}

export default App;
// export default Radium(App);


