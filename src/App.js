import React, { useState } from "react";
import './App.css';
import UserInput from './pages/Userinput';
import { fetchData,getRepoData } from './Sever/Api';
const user= 'leij11';
const App =()=> {
  const [username, setUsername] = useState('leij11');
  // setCourseGoals(courseGoals.concat(newGoal));
  const addHandler = newGoal =>
      setUsername(newGoal);

    return (
       <div className='style'>
         <UserInput onhandlechange={addHandler} />
      </div>
    );
}

export default App;
