import React, { useState } from "react";
import {BrowserRouter as Router,
        Route,
        Switch} from 'react-router-dom';

import './App.css';
import Main from './pages/Main'
import UserInput from './pages/Userinput';

const user= 'leij11';

const App =()=> {
    return (
       <Router>
         <Switch>
               <Route path={process.env.PUBLIC_URL +'/main'} component={Main} />
               <Route path={'/:username/profile'} component={Main} />
               <Route path='/' component={UserInput} />
              </Switch>
      </Router>
    );
}

export default App;
