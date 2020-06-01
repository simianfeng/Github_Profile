import axios from 'axios';
import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

export const getData = async (username) => {
  let changeableUrl = url;

  if (username) {
    changeableUrl = `${url}/${username}`;
  }

  try {
    const { data:
      { name,
        company,
        location,
        created_at,
        updated_at,
        email,
        followers,
        bio,
        avatar_url,
      login }
      } = await axios.get(changeableUrl);

    return {name,
      company,
      created_at,
      updated_at,
      location,
      email,
      followers,
      bio,
      avatar_url,
    login };
  } catch (error) {
    return error;
  }
};

export const getRepoData=async (username)=>{
  let changeableUrl = url;

  if (username) {
    changeableUrl = `${url}/${username}/repos`;
  }
  try {
    const { data }=await axios.get(changeableUrl);
    return data.map((
      { stargazers_count,
        language,
        forks,
        size,
        name})=>
    (
      {
        stargazers_count,
          language,
          forks,
          size,
          name}));
  }
   catch (error) {
    return error;
  }
}

export const getLanguageData=async (username)=>{
  const { data }=await axios.get(`${url}/${username}/repos`);

  const languages = {}
  const languageStars = {}
  const languageForks={}
  data.forEach(item => {
    if (item.language) {
      languages[item.language] ? languages[item.language] += 1 : languages[item.language] = 1
      languageStars[item.language] ? languageStars[item.Language] += item.stargazers_count|| 0 :languageStars[item.language] =item.stargazers_count|| 0
      languageForks[item.language] ? languageForks[item.Language] += item.forks|| 0 :languageForks[item.language] =item.forks|| 0

    } else {
      languages['Unknown'] ? languages['Unknown'] += 1 : languages['Unknown'] = 1
      languageStars['Unknown']  ? languages['Unknown'] += item.stargazers_count|| 0: languageStars['Unknown'] += item.stargazers_count||0
      languageForks['Unknown'] ? languageForks['Unknown'] += item.forks|| 0 :languageForks['Unknown'] =item.forks|| 0
    }
  })
  const languagesArr = []
  for (let i in languages) {
    const obj = {
      language: i,
      stars: languageStars[i] || 0,
      count: languages[i],
      forks:languageForks[i]||0
    }
    languagesArr.push(obj)

  }
  return languagesArr
}
export const getSum=async (username)=>{
  const { data }=await axios.get(`${url}/${username}/repos`);
  var totalstar=0
  var totalfork=0
  data.forEach(item => {
    totalstar+=item.stargazers_count|| 0
    totalfork+=item.tem.forks|| 0
  })
  return {totalstar,totalfork}
}

export const getTop=async (username)=>{
}
/*
export const getCommit=async (username)=>{
  const  {data}=(await axios.get(`${url}/${username}/repos`));
  const commits_info=[]
  const commits_date=[]
  //const [commit, setcommit] = useState([]);
  const urls=[]
  data.forEach(repo => {
    commits_info.push(`https://api.github.com/repos/${username}/${repo.name}/commits`)
})
  //console.log(commits_info);
  commits_info.forEach(i=>{
    //console.log(i);
    urls.push(axios.get(i));
  })
  Promise.all(urls)
  .then(
    urls.forEach(item => {
      console.log(JSON.parse(item));
  }
)
)

  fetch(urls)
      .then(response => response.json())
      .then(json => console.log(json));


  fetch(urls)
  .then(response => response.json())
 .then (
   json =>
   (useEffect(() => {
     const fetchcommit = async () => {
       setcommit(commit);
     };
     fetchcommit();
   }, []))
  )

  const resArr = commit.map((r, i)=> {
      return (
        {r.commit.author.date}
      )
      }


  axios.all(urls)
  .then(
    urls.forEach(item => {
      console.log(item);
    }
  )
)

    Promise.all(urls)
    .then(

      urls.forEach(item => {
        console.log(item);
      if(item.commit.author.login===username)
      {
        commits_date.push(item.commit.author.date)
      }
    }
  )
  )

return commits_info
}

/*
export const getCommit=async (username)=>{
  let changeableUrl = url;
  var commitDate=[];
  if (username) {
    changeableUrl = `${url}/${username}/events`;

  }

  try {
    const { data }=await axios.get(changeableUrl);
    data.forEach(item => {
      if((
        item.type=== 'CreateEvent' ||
        item.type==='PushEvent'||
        item.type==='IssuesEvent'||
        item.type==='IssueCommentEvent'||
        item.type==='ForkEvent'||
        item.type==='PullRequestReviewCommentEvent'||
        item.type==='PullRequestEvent'
      ) && item.actor.login===username)
      {
        commitDate.push(item.created_at)
      }
    }
  )
    return commitDate
  }
   catch (error) {
    return error;
  }
}
*/
