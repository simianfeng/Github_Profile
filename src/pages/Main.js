import React, { useState, useEffect } from 'react';
import { getData,getRepoData,getLanguageData,getUsercommits } from '../Sever/Api';
import { Line, Bar,Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
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
