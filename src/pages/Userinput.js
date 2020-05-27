import React, { useState } from "react";
import './UserInput.css';
import { useHistory } from "react-router-dom";

const Userinput  = props =>{
  const [enteredText, setEnteredText] = useState('');
  const addHandler = event => {

    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    };
    setEnteredText('');
    props.onhandlechange(newGoal);
  };

const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
  <form className='forms' onSubmit={addHandler}>
          <label className='label'>Enter github user name: </label>
          <input className='input' type="text" value={enteredText} onChange={textChangeHandler} required />
          <button className='submit' type="submit"> Submit</button>
    </form>);
}

export default Userinput;
