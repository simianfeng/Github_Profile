import React, { useState, useEffect } from 'react';
import { getData,getRepoData,getLanguageData,getUsercommits } from '../Sever/Api';
import { useParams } from 'react-router-dom';
import { Container,Card } from 'react-bootstrap';


const User = () => {
  const username=useParams().username;
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      setUserData(await getData(username));
    };

    fetchUser();
  }, []);
  return(
      console.log(userData),
    <div>
      <label>
        <img src={userData.avatar_url} alt="avatar" />
        <h1>{userData.name}</h1>
        <h3>{userData.location}</h3>
        <h3>{userData.bio}</h3>

      </label>
    </div>
  );
}

export default User;
