import React, { useState } from "react";
import './UserInput.css';
import { useHistory } from "react-router-dom";

const Userinput  = props =>{
  const [username, setUsername] = useState('leij11');
  const handleChange = e => setUsername(e.target.value);
  let history = useHistory();

  return (
    <form onSubmit={e => {
        e.preventDefault();
        history.push(
          {
            pathname: '/main',
            query: { id: username },
          });
      }}>
      <label htmlFor="username">Enter your github name!</label>
      <input name="username" type="text" onChange={handleChange} />
      </form>)
}

export default Userinput;
