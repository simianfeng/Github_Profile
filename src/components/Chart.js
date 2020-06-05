import React, { useState, useEffect } from 'react';
import { getLanguageData } from '../Sever/Api';
import {Doughnut,Polar} from 'react-chartjs-2';
import { useParams } from "react-router-dom";
import { Grid,Card} from 'semantic-ui-react';
const Chart = () => {
  const username=useParams().username;
  const [languagesArr, setlanguagesArr] = useState([]);
  const width=50
  const height=350
  const size=120
  useEffect(() => {
    const fetchlanguages = async () => {
      setlanguagesArr(await getLanguageData(username));
    };
    fetchlanguages();

  }, []);

  const PolarChart = (
    <Polar
      width={width}
      height={height}
      data={{
        labels: languagesArr.map(({language }) => language),
        datasets: [{
          data: languagesArr.map(({count}) => count),
          label: 'Lanuage',
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
              title: {
                display: true,
                text: `Number of Repos Per Language` ,
                fontSize: 20,
                fontFamily: 'Mono',
                fontColor: '#2F4F4F'
              },
              maintainAspectRatio: false,
               responsive: true,
               layout: {
                  padding: {
                      top: 34,
                      left: 15,
                      right: 15,
                      bottom: 15
                  }
                }
            }
          }
            />

      );

      const doughnutChart_star = (
        <Doughnut
          width={width}
          height={height}
          data={{
            labels: languagesArr.map(({language }) => language),
            datasets: [{
              data: languagesArr.map(({stars }) => stars),
              label: 'language',
              borderColor: 'Gray',
              hoverBackgroundColor: 'Gray',
              hoverBorderColor: 'Gray',
              backgroundColor: ['LightSteelBlue', 'PeachPuff','LemonChiffon','PowderBlue', 'LavenderBlush','Pink','LightGray','SandyBrown','PaleGoldenRod','LightCoral','PaleVioletRed'],
              fill: true}]
            }}

              options={{
                  legend: {
                    display: true,
                    position:'bottom'
                  },
                  title: { display: true,
                    text: `Stars Count Per Language`,
                    fontSize: 20,
                    fontFamily: 'Mono',
                    fontColor: '#2F4F4F' },
                  responsive: true,
                  maintainAspectRatio: false,
                  layout: {
                     padding: {
                         top: 34,
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
              width={width}
              height={height}
              data={{
                labels: languagesArr.map(({language }) => language),
                datasets: [{
                  data: languagesArr.map(({forks }) => forks),
                  label: 'language',
                  borderColor: 'Gray',
                  hoverBackgroundColor: 'Gray',
                  hoverBorderColor: 'Gray',
                  backgroundColor: ['LightSteelBlue', 'PeachPuff','LemonChiffon','PowderBlue', 'LavenderBlush','Pink','LightGray','SandyBrown','PaleGoldenRod','LightCoral','PaleVioletRed'],
                  fill: true}],}}

                  options={{
                      legend: { display: true,position:'bottom'  },
                      title: { display: true,
                        text: `Forks Count Per Language`,
                        fontSize: 20,
                        fontFamily: 'Mono',
                        fontColor: '#2F4F4F' },
                      responsive: true,
                      maintainAspectRatio: false,
                      layout: {
                         padding: {
                             top: 34,
                             left: 15,
                             right: 15,
                             bottom: 15
                         }
                       }
                    }}

                  />
              );
          return (
           //console.log(languagesArr),
            <Grid >
              <Grid.Row >
                <Grid.Column >
                {PolarChart}
                </Grid.Column>
              </Grid.Row>

              <Grid.Row centered columns={2}>
                <Grid.Column mobile={16} tablet={8} computer={5}>
                {doughnutChart_star }
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={5}>
                {doughnutChart_fork }
                </Grid.Column>
              </Grid.Row>
            </Grid>

          );
}

export default Chart;
