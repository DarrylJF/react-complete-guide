//import React, { useState, Component} from 'react';
import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: "name 1", age: 28 },
      { id: 2, name: "name 2", age: 18 },
      { id: 3, name: "name 3", age: 44 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); // set showPersons == to what does show is not. doesShow is equal to the showPersons state which is false so it will set it to true
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // always update state in an immutable fashion. create a copy, makes changes to the copy, and then update state using setState()
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'orange',
      font: 'inherit',
      padding: '8px',
      color: 'white',
      cursor: 'pointer'
    };

    let persons = null; // persons is null by default (does not show)

    if ( this.state.showPersons ) { // if showPersons is true (show)
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id} // default property react expects to find on an element which is rendered via a list (map)
              changed={(event) => this.nameChangeHandler(event, person.id)}
              /> // end of Person Component
          })}
        </div>
      );
    }

    return (
      <div className="App">
         <h1>this is a test</h1>
           <p>this is a paragraph</p>
          <button 
            style={style}
            onClick={this.togglePersonHandler}>Show/Hide
          </button>
          {persons}          
      </div>
    );
  }
}

export default App;












// const app = props => {
//   const [ personState, setPersonsState ] = useState({
//     persons: [
//       { name: "J", age: 33 },
//       { name: "B", age: 21 },
//       { name: "G", age: 22}
//   ],
//   });

//   const [ otherState, setOtherState ] = useState('some other state')

//   console.log(personState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState( {
//       persons: [
//         { name: "T", age: 37 },
//         { name: "B", age: 21 },
//         { name: "G", age: 23}
//       ]
//     });
//   };


//   return (
//       <div className="App">
//         <h1>this is a test</h1>
//           <p>this is a paragraph</p>
//           <button onClick={switchNameHandler}>Switch Name</button>
//           <Person
//             name={personState.persons[0].name} age={personState.persons[0].age}/>
//           <Person 
//             name={personState.persons[1].name} age={personState.persons[1].age} click={switchNameHandler}/>
//           <Person 
//             name={personState.persons[2].name} age={personState.persons[2].age}/>
//       </div>
//     );
//    // JSX, compiles to
//    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'does this work now'));
  
// }


