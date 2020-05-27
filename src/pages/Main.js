import React, { useState, useEffect } from 'react';
import { getData,getRepoData,getLanguageData,getUsercommits } from '../Sever/Api';
import Piechart from '../components/Piechart'
import Barchart from '../components/Barchart'
import { Line, Bar,Doughnut } from 'react-chartjs-2';


const Main = (username) => {
  const [userData, setUserData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const [commitData, setcommitData] = useState({});
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

/*
    const fetchcommit = async () => {
      setcommitData(await getUsercommits());
    };
    */

    fetchUser();
    fetchRepo();
    //fetchcommit();
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

      const doughnutChart = (
        <Doughnut
                data={{
                  labels: languagesArr.map(({language }) => language),
                  datasets: [{
                    data: languagesArr.map(({count }) => count),
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
    console.log(commitData),
    console.log(languagesArr),
    <div>
        {barChart }
        {doughnutChart }
    </div>
  );
}

export default Main;
