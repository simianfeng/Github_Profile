import React, { useState, useEffect } from 'react';
import { getData,getRepoData,getLanguageData } from '../Sever/Api';
import Piechart from '../components/Piechart'
import Barchart from '../components/Barchart'
import { Line, Bar } from 'react-chartjs-2';


const Main = props => {
  const [userData, setUserData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [languagesArr, setlanguagesArr] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      setUserData(await getData('leij11'));
    };
    const fetchRepo = async () => {
      setRepoData(await getRepoData('leij11'));
    };

    const fetchlanguages = async () => {
      setlanguagesArr(await getLanguageData('leij11'));
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
                fill: true,
              }
              ],
            }}
          />

);



  return (
    //console.log(repoData),
    console.log(languagesArr),
    <div>
        {barChart }
    </div>
  );
}

export default Main;
