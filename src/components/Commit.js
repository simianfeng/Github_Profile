import React, { useState, useEffect } from 'react';
import { getRepoData,getCommit,getRepoName} from '../Sever/Api';
import { useParams } from "react-router-dom";
import axios from 'axios';
const Commit = () => {
  const username=useParams().username;
  const [repoData, setRepoData] = useState([]);
  const [userCommit, setCommit] = useState([]);
  const total_commit=[]
  const activate={}
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
      //const githubInfo = axios(url)
      //return {githubInfo}
    }
  )

    /*
  const requests = names.map((name) => {
    const url = `https://api.github.com/repos/${username}/${name}/stats/participation`
    //return fetchGithubInfo(url) // Async function that fetches the user info.
     .then((a) => {
       /*
       for (let i in a.name )
       {
         if (activate[i]) {
           activate[i]+=a.name[i]

         } else {
           activate[i] = 0
         }

         //console.log(a.name[i])
         //activate[i]+=a.name[i]
         console.log(activate)
       */
    // return a // Returns the user info.
  //  })
//  })
//  console.log(filesPromise);
const filesPromise = Promise.all(requests).then((results) => {

for (let i in results )
{
  const a=results[i]
  //console.log(a[0])
  //console.log(results[i])
  for(let j in a)
  {
    /*
    if (activate[j]) {
      activate[j]+=a[j]

    }
    else {
      activate[j] = 0
    }
    */
    activate[j] ? activate[j] += a[j] : activate[j]=0
    total+=activate[j]||0
    console.log(activate[j])
  }
}
console.log(activate)
total_commit.push(JSON.stringify(results));
return JSON.stringify(results)
//return [].concat(...results);
});
console.log(filesPromise);
console.log(total_commit)


  return(
    <div>
      {total_commit}
      {total}
    </div>
  )
}
export default Commit;
