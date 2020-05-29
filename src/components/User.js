import React, { useState, useEffect } from 'react';
import { getData,getRepoData,getLanguageData,getUsercommits } from '../Sever/Api';
import { useParams } from 'react-router-dom';
import { Header, Icon, Image,Container } from 'semantic-ui-react'
import './User.css';

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
      <div className='profile'>
        {userData.avatar_url && (
          <div className='avatar'>
            <img src={userData.avatar_url} alt="avatar" />
          </div>
        )}

        {userData.name &&
          <h1>
            {userData.name}
          </h1>
        }

        {userData.login && (
          <h2>
            <a>
              @{userData.login}
            </a>
          </h2>
        )}
        {userData.bio &&
          <h3>
            {userData.bio}
          </h3>
        }
        {userData.location &&
          <h3>
            {userData.location}
          </h3>
        }

      </div>
  );
}

export default User;
