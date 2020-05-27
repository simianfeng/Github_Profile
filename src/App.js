import React, { useState } from "react";
import './App.css';
import UserInput from './pages/Userinput';

import Main from './pages/Main'

const user= 'leij11';
const App =()=> {
  const [username, setUsername] = useState(user);
  const addHandler = newGoal =>
      setUsername(newGoal);

    return (
       <div className='style'>
         <UserInput onhandlechange={addHandler} />

         <Main/>
      </div>
    );
}

export default App;
