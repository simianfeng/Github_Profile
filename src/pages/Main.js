import React, { useState, useEffect } from 'react';
import { getData,getRepoData,getLanguageData } from '../Sever/Api';
import Piechart from '../components/Piechart'
import Barchart from '../components/Barchart'

const data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
const Main = props => {
  const [userData, setUserData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [languagesArr, setlanguagesArr] = useState({});

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

  return (
    console.log(repoData),
    console.log(languagesArr),
    <React.Fragment>
    <Barchart />
    </React.Fragment>
  );
}

export default Main;
