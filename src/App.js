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
         <Switch>
               <Route path='/main' component={Main} />
               <Route path='/:username/profile' component={Main} />
               <Route path='/' component={UserInput} />
              </Switch>
      </Router>
    );
}

export default App;
