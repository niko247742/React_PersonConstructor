import React from 'react';
import './Person.css';

const Person = (props) => {
    return  (
        <div className = "Person">
            <p onClick = {props.click}>Im a {props.name} and I am {props.age} years old.</p>
            Change Name: <input type="text" onChange = {props.changed} value = {props.name}/>
            Change Age: <input type="number" onChange = {props.ageChanged} value = {props.age}/>
        </div>        
    )
    
}


export default Person