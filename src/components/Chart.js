import React, { useState, useEffect } from 'react';
import { getLanguageData ,fetchLastCommit,getCommit} from '../Sever/Api';
import { Line, Bar,Doughnut, Divider, Grid, Image, Segment } from 'react-chartjs-2';
import { useParams } from "react-router-dom";

const Chart = () => {
  const username=useParams().username;
  const [languagesArr, setlanguagesArr] = useState([]);
  const [l, setl] = useState({});
  useEffect(() => {
    const fetchlanguages = async () => {
      setlanguagesArr(await getLanguageData(username));
    };
    const fetchl = async () => {
      setl(await getCommit(username));
    };

    fetchlanguages();
    fetchl()
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
          hoverBackgroundColor: 'white',
          hoverBorderColor: 'Gray',
          borderWidth: 1,
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
              hoverBackgroundColor: 'Tomato',
              hoverBorderColor: 'Gray',
              backgroundColor: ['LightSteelBlue', 'PeachPuff','LemonChiffon','PowderBlue', 'LavenderBlush','Pink','LightGray','SandyBrown','PaleGoldenRod','LightCoral','PaleVioletRed'],
              fill: true}],}}
              options={{
                  legend: { display: true },
                  title: { display: true, text: `Number of Repo Per Language` },
                }}

              />
          );

          const doughnutChart2 = (
            <Doughnut
              width={120}
              height={40}
              data={{
                labels: languagesArr.map(({language }) => language),
                datasets: [{
                  data: languagesArr.map(({forks }) => forks),
                  label: 'language',
                  borderColor: 'Gray',
                  hoverBackgroundColor: 'LightPink',
                  hoverBorderColor: 'Gray',
                  backgroundColor: ['LightSteelBlue', 'PeachPuff','LemonChiffon','PowderBlue', 'LavenderBlush','Pink','LightGray','SandyBrown','PaleGoldenRod','LightCoral','PaleVioletRed'],
                  fill: true}],}}
                  options={{
                      legend: { display: true },
                      title: { display: true, text: `Number of Repo Per Language` },
                    }}

                  />
              );
          return (
            console.log(l),
            console.log(languagesArr),
            <div>
                {barChart}
                {doughnutChart }

            </div>

          );
}

export default Chart;
