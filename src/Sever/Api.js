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
        avatar_url,url,
      login,public_repos }
      } = await axios.get(changeableUrl);

    return {name,
      company,
      created_at,
      updated_at,
      location,
      email,
      followers,
      bio,
      avatar_url,url,
    login,public_repos };
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
        name,
      description})=>
    (
      {
        stargazers_count,
          language,
          forks,
          size,
          name,
        description}));
  }
   catch (error) {
    return error;
  }
}

export const getRepoName=async (username)=>{
  const { data }=await axios.get(`${url}/${username}/repos`);
  const name=[]
  data.forEach(item => {
    name.push(item.name);
  })
  return name
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
    totalfork+=item.forks_count|| 0
  })
  return {totalstar,totalfork}
}
