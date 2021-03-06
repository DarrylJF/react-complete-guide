// import React, { useState, Component} from 'react';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxillary from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';



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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true; // set to true by default to allow updates
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
    console.log(snapshot);
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  togglePersonsHandler = ( ) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
  }

  deletePersonhandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  };  

  render() {
    console.log('[App.js] render');
    let persons = null;
    
    if ( this.state.showPersons ) {
      persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonhandler}
                  changed={this.nameChangedHandler}
                  isAuthenticated={this.state.authenticated}/>;
    }

    const btnText = this.state.showCockpit ? 'Hide Cockpit' : 'Show Cockpit';

    return (
      <Auxillary>
        <button onClick={() => {
          this.setState({showCockpit: !this.state.showCockpit})}}>
            {btnText}
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
            }}
          >
          {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle} 
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            /> 
          ) : null}
          {persons}
          </AuthContext.Provider>
      </Auxillary>
    );
  }
}

export default withClass(App, classes.App);
// export default Radium(App);


