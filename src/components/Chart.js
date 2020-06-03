import React, { useState, useEffect } from 'react';
import { getLanguageData } from '../Sever/Api';
import { Line, Bar,Doughnut, Divider, Image, Segment } from 'react-chartjs-2';
import { useParams } from "react-router-dom";
import { Grid,Card} from 'semantic-ui-react';
const Chart = () => {
  const username=useParams().username;
  const [languagesArr, setlanguagesArr] = useState([]);
  const [l, setl] = useState({});
  const width=50
  const height=300
  const size=120
  useEffect(() => {
    const fetchlanguages = async () => {
      setlanguagesArr(await getLanguageData(username));
    };
    fetchlanguages();

  }, []);

  languagesArr.sort((a, b) => {
        if (a.count > b.count) return -1
        else if (a.count < b.count) return 1
        return 0
      })
console.log(languagesArr)
  const barChart = (
    <Bar
      width={width}
      height={height}
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
          fill: true}]
        }}
          options={
            {
              legend: { display: true },
              title: { display: true, text: `Top Star Per Language` },
              maintainAspectRatio: false,
               responsive: true,
               layout: {
                  padding: {
                      top: 5,
                      left: 15,
                      right: 15,
                      bottom: 15
                  }
                },
                scales: {
                      xAxes: [{
                          ticks: { display: false },
                          gridLines: {
                              display: false,
                              drawBorder: false
                          }
                      }],
                      yAxes: [{
                          ticks: { display: true },
                          gridLines: {
                              display: false,
                              drawBorder: true
                          }
                      }]
                    }
            }
          }
            />

      );

      const doughnutChart_star = (
        <Doughnut

          data={{
            labels: languagesArr.map(({language }) => language),
            datasets: [{
              data: languagesArr.map(({stars }) => stars),
              label: 'language',
              borderColor: 'Gray',
              hoverBackgroundColor: 'Tomato',
              hoverBorderColor: 'Gray',
              backgroundColor: ['LightSteelBlue', 'PeachPuff','LemonChiffon','PowderBlue', 'LavenderBlush','Pink','LightGray','SandyBrown','PaleGoldenRod','LightCoral','PaleVioletRed'],
              fill: true}]
            }}
              options={{
                  legend: { display: true },
                  title: { display: true, text: `Stars Count Per Language` },
                  responsive: true,
                  layout: {
                     padding: {
                         top: 5,
                         left: 15,
                         right: 15,
                         bottom: 15
                     }
                   }
                }}

              />
          );

          const doughnutChart_fork = (
            <Doughnut
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
                      responsive: true,
                      layout: {
                         padding: {
                             top: 5,
                             left: 15,
                             right: 15,
                             bottom: 15
                         }
                       }
                    }}

                  />
              );
          return (
            console.log(l),
            console.log(languagesArr),
            <Grid >
              <Grid.Row >
                <Grid.Column >
                {barChart}
                </Grid.Column>
              </Grid.Row>

              <Grid.Row centered columns={2}>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                {doughnutChart_star }
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                {doughnutChart_fork }
                </Grid.Column>
              </Grid.Row>
            </Grid>

          );
}

export default Chart;
