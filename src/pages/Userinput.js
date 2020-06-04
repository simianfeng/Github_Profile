import React, { useState} from "react";
import { Icon } from 'semantic-ui-react';

import './UserInput.css';
import { useHistory } from "react-router-dom";

const Userinput  = props =>{
  const [username, setUsername] = useState('leij11');
  const handleChange = e => setUsername(e.target.value);
  let history = useHistory();
  const IconGithub = () => <Icon github name='github' />

  return (
    <div className='container'>
      <form className='forms' onSubmit={e => {
          e.preventDefault();
          history.push('/'+username+'/profile');
        }}>

        <label className='label' >
          <IconGithub/>
          Enter your github name!
        </label>

        <input className='input'
          name="username"
          type="text"
          onChange={handleChange}
        />
        </form>
    </div>)
}

export default Userinput;
