import axios from 'axios';
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
  data.forEach(item => {
    if (item.language) {
      languages[item.language] ? languages[item.language] += 1 : languages[item.language] = 1
      languageStars[item.language] ? languageStars[item.Language] += item.stargazers_count|| 0 :languageStars[item.language] =item.stargazers_count|| 0
    } else {
      languages['Unknown'] ? languages['Unknown'] += 1 : languages['Unknown'] = 1
      languageStars['Unknown']  ? languages['Unknown'] += item.stargazers_count|| 0: languageStars['Unknown'] += item.stargazers_count||0
    }
  })
  const languagesArr = []
  for (let i in languages) {
    const obj = {
      language: i,
      stars: languageStars[i] || 0,
      count: languages[i]
    }
    languagesArr.push(obj)

  }
  return languagesArr
}

export const getUsercommits = (username) => {
  return axios.get(`https://github.com/users/leij11/repos`)

}
