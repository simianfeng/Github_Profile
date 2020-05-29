import React, { useState, useEffect } from 'react';
import { getData,getRepoData,getLanguageData,getUsercommits } from '../Sever/Api';
import { Line, Bar,Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import Chart from '../components/Chart'
import User from '../components/User'
import './Main.css'
const Main = props => {
  /*
  const username=useParams().username;
  const [userData, setUserData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const [commitData, setcommitData] = useState({});
  const [languagesArr, setlanguagesArr] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      setUserData(await getData(username));
    };
    const fetchRepo = async () => {
      setRepoData(await getRepoData(username));
    };

    const fetchlanguages = async () => {
      setlanguagesArr(await getLanguageData(username));
    };

    fetchUser();
    fetchRepo();
    fetchlanguages();
  }, []);

  const barChart = (
    <Bar
      data={{
        labels: languagesArr.map(({language }) => language),
        datasets: [{
          data: languagesArr.map(({stars }) => stars),
          label: 'language',
          borderColor: '#3333ff',
          backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
          fill: true}],}}/>
      );

      const doughnutChart = (
        <Doughnut
          data={{
            labels: languagesArr.map(({language }) => language),
            datasets: [{
              data: languagesArr.map(({count }) => count),
              label: 'language',
              borderColor: '#3333ff',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              fill: true}],}}/>
          );
*/
  return (
    <div className='style'>
      <User />
      <Chart />
    </div>
  );
}

export default Main;
