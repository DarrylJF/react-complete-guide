//import React, { useState, Component} from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "name 1", age: 28 },
      { name: "name 2", age: 18 },
      { name: "name 3", age: 44 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 32 },
        { name: "name 2", age: 18 },
        { name: "name 8", age: 67 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: 23 },
        { name: "name 2", age: 18 },
        { name: "name 3", age: 44 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
         <h1>this is a test</h1>
           <p>this is a paragraph</p>
          <button onClick={() => this.switchNameHandler('max!!')}>Switch Name</button>
           <Person
          name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangeHandler} />
          <Person 
            name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'max!')} />
          <Person 
            name={this.state.persons[2].name} age={this.state.persons[2].age} />
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


