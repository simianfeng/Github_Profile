import React, { useState, useEffect } from 'react';
import { getLanguageData } from '../Sever/Api';
import { Line, Bar,Doughnut, Divider, Grid, Image, Segment } from 'react-chartjs-2';
import { useParams } from "react-router-dom";

const Chart = () => {
  const username=useParams().username;
  const [languagesArr, setlanguagesArr] = useState([]);
  const [l, setl] = useState({});
  const size=400
  useEffect(() => {
    const fetchlanguages = async () => {
      setlanguagesArr(await getLanguageData(username));
    };
    /*
    const fetchl = async () => {
      setl(await getCommit(username));
    };
*/
    fetchlanguages();

  }, []);

  const LIMIT = 5;
  const sortProperty = 'stars';
  languagesArr.sort((a, b) => {
        if (a.count > b.count) return -1
        else if (a.count < b.count) return 1
        return 0
      })
console.log(languagesArr)
  const barChart = (
    <Bar
      width={size}
      height={size}
      data={{
        labels: languagesArr.map(({language }) => language),
        datasets: [{
          data: languagesArr.map(({count}) => count),
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

      const doughnutChart_star = (
        <Doughnut
          width={size}
          height={size}
          data={{
            labels: languagesArr.map(({language }) => language),
            datasets: [{
              data: languagesArr.map(({stars }) => stars),
              label: 'language',
              borderColor: 'Gray',
              hoverBackgroundColor: 'Tomato',
              hoverBorderColor: 'Gray',
              backgroundColor: ['LightSteelBlue', 'PeachPuff','LemonChiffon','PowderBlue', 'LavenderBlush','Pink','LightGray','SandyBrown','PaleGoldenRod','LightCoral','PaleVioletRed'],
              fill: true}],}}
              options={{
                  legend: { display: true },
                  title: { display: true, text: `Stars Count Per Language` },
                }}

              />
          );

          const doughnutChart_fork = (
            <Doughnut
              width={size}
              height={size}
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
                      title: { display: true, text: `Forks Count Per Language` },
                    }}

                  />
              );
          return (
            console.log(l),
            console.log(languagesArr),
            <div>
                {barChart}
                {doughnutChart_star }
                {doughnutChart_fork }

            </div>

          );
}

export default Chart;
