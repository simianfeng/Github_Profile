import React, { useState} from "react";
import { Container } from 'react-bootstrap';

import './UserInput.css';
import { useHistory } from "react-router-dom";

const Userinput  = props =>{
  const [username, setUsername] = useState('leij11');
  const handleChange = e => setUsername(e.target.value);
  let history = useHistory();

  return (
    <Container className='container'>
    <form className='forms' onSubmit={e => {
        e.preventDefault();
        history.push('/'+username+'/profile');
      }}>
      <label className='label' htmlFor="username">Enter your github name!</label>
      <input className='input' name="username" type="text" onChange={handleChange} />
      </form>
    </Container>)
}

export default Userinput;
