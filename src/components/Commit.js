import React, { useState, useEffect } from 'react';
import { getRepoData,getCommit,getRepoName} from '../Sever/Api';
import { useParams } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Commit = () => {
  const username=useParams().username;
  const [repoData, setRepoData] = useState([]);
  const [userCommit, setCommit] = useState([]);
  const total_commit=[]
  const activate=[]
  var total=0

  useEffect(() => {
    const fetchRepo = async () => {
      setRepoData(await getRepoName(username));
    };
    fetchRepo();
  }, []);

  const fetchGithubInfo = async (url) => {
  console.log(`Fetching ${url}`)
  const githubInfo = await axios(url) // API call to get user info from Github.
  return {
    name: githubInfo.data.owner
  }
}


    const requests=repoData.map((name) =>
    {
      const url = `https://api.github.com/repos/${username}/${name}/stats/participation`
      return fetchGithubInfo(url) // Async function that fetches the user info.
 .then((a) => {
  return a.name // Returns the user info.
  })
    }
  )

var q=0
for (q=0;q<52;q++)
{
  activate.push(0)
}
const filesPromise = Promise.all(requests).then((results) => {
for (let i in results )
{
  const a=results[i]
  for(let j in a)
  {
    activate[j]+=a[j]
    //console.log(activate[j])
    total+=activate[j]
  }
}
//console.log(activate)
//total_commit.push(JSON.stringify(results));
return JSON.stringify(results)
});
//console.log(filesPromise);
console.log(activate)
//console.log(total_commit);
//console.log(total);

/*
const lineChart = (
  <Line
    data={{
      //labels: activate.map(({language }) => language),
      datasets: [{
        data: activate,
        label: 'Contributions',
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
              text: `Public Contributions in past year` ,
              fontSize: 15,
              fontFamily: 'Mono',
              fontColor: '#2F4F4F'
            },
            maintainAspectRatio: false,
             responsive: true,
             layout: {
                padding: {
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 15
                }
              }
          }
        }
          />

    );
*/
  return(
    <div>
    
      {total_commit}
      {total}
    </div>
  )
}
export default Commit;
