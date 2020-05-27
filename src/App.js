import React, { useState } from "react";
import './App.css';
import UserInput from './pages/Userinput';
import {BrowserRouter as Router,
        Route,
        Link,
        Redirect,
        Switch,
        useHistory} from 'react-router-dom';

import Main from './pages/Main'

const user= 'leij11';

const App =()=> {
    return (
       <Router>
         <Route path="/" >
           <UserInput  />
           </Route>
         <Route path="/Main" exact>
           <Main/>
           </Route>
      </Router>
    );
}

export default App;
