import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (username) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/${username}`;
  }

  try {
    const { data:
      { name,
        company,
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
      email,
      followers,
      bio };
  } catch (error) {
    return error;
  }
};
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
