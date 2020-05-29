import React, { useState, useEffect } from 'react';
import { getLanguageData } from '../Sever/Api';
import { Line, Bar,Doughnut } from 'react-chartjs-2';
import { useParams } from "react-router-dom";

const Chart = () => {
  const username=useParams().username;
  const [languagesArr, setlanguagesArr] = useState([]);

  useEffect(() => {
    const fetchlanguages = async () => {
      setlanguagesArr(await getLanguageData(username));
    };

    fetchlanguages();
  }, []);

  const barChart = (
    <Bar
      width={120}
      height={40}
      data={{
        labels: languagesArr.map(({language }) => language),
        datasets: [{
          data: languagesArr.map(({stars }) => stars),
          label: 'Star',
          borderColor: 'Gray',
          backgroundColor: ['LightSteelBlue', 'PeachPuff','LemonChiffon','PowderBlue', 'LavenderBlush','Pink','LightGray','SandyBrown','PaleGoldenRod','LightCoral','PaleVioletRed'],
          fill: true}],}}
          options={{
              legend: { display: true },
              title: { display: true, text: `Top Star Per Language` },
            }}
            />

      );

      const doughnutChart = (
        <Doughnut
          width={120}
          height={40}
          data={{
            labels: languagesArr.map(({language }) => language),
            datasets: [{
              data: languagesArr.map(({count }) => count),
              label: 'language',
              borderColor: 'Gray',
              backgroundColor: ['LightSteelBlue', 'PeachPuff','LemonChiffon','PowderBlue', 'LavenderBlush','Pink','LightGray','SandyBrown','PaleGoldenRod','LightCoral','PaleVioletRed'],
              fill: true}],}}
              options={{
                  legend: { display: true },
                  title: { display: true, text: `Number of Repo Per Language` },
                }}

              />
          );

          return (
            <div>
                {barChart}
                {doughnutChart }

            </div>
          );
}

export default Chart;
