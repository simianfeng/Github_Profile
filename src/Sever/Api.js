import axios from 'axios';
const url = 'https://api.github.com/users';

export const fetchData = async (username) => {
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
        bio }
      } = await axios.get(changeableUrl);

    return {name,
      company,
      created_at,
      updated_at,
      location,
      email,
      followers,
      bio };
  } catch (error) {
    return error;
  }
};

export const getRepoData=(username)=>{
  return axios.get(`${url}/${username}/repos`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

/*
export const getUsercommits = (username) => {
  return axios.get(`https://github.com/users/${username}/contributions`)
    .then(data => utils.handleUserCommits(data.data))
}

// Call function passing in 'facebook' as GitHub username
/*
requestUserRepos('leij11');
module.exports = {
  checkUserIsStarringRepo,
  getUserData,
  getRateLimit
  requestUserRepos
}
*/
