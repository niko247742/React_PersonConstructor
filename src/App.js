import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
    state = {
      persons: [
        { name: 'Josh', age: 28, id: 1 },
        { name: 'Steve', age: 25, id: 2 },
        { name: 'Caroline', age: 30, id:3 },
        { name: 'Jen', age: 29, id:4 }
      ],
      showPersons: false
    }
    
  nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex((person => {
  return person.id === id;
  }));

  const person = {...this.state.persons[personIndex]};
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;

    this.setState ({persons: persons});
  } 

  ageChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person => {
    return person.id === id;
    }));
  
    const person = {...this.state.persons[personIndex]};
    person.age = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
      this.setState ({persons: persons});
    } 

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();   //Makes a copy of the original persons name. Could also do it like const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

render() {
  let persons = null;

  if(this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person, i) => {
          return <Person 
            key = {person.id}
            name = {person.name}  
            age = {person.age}
            click = { () => {this.deletePersonHandler(i)}}
            changed = { (event) => this.nameChangedHandler(event, person.id)}
            ageChanged = { (event) => this.ageChangedHandler(event, person.id)} />
        })}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hi I Am A React App</h1>
      <h2>Update Name and Age</h2>
      <button onClick={ this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
   );
  }
}



    


export default App;
