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

export const getRepoData=async (username)=>{
  let changeableUrl = url;

  if (username) {
    changeableUrl = `${url}/${username}/repos`;
  }
  try {
    return await axios.get(changeableUrl);
  }
   catch (error) {
    return error;
  }
}
