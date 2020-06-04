import React from 'react';
import Chart from '../components/Chart'
import User from '../components/User'
import TopRepo from '../components/TopRepo'
import Commit from '../components/Commit'
import './Main.css'
const Main = props => {
  return (
    <div className='style'>
      <User />
      <Commit />
      <Chart />
      <TopRepo />
    </div>
  );
}

export default Main;
