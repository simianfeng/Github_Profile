import React, { useState, useEffect } from 'react';
import { getData,getRepoData,getLanguageData,getCommits } from '../Sever/Api';
import { useParams } from 'react-router-dom';
import {  Icon, Image} from 'semantic-ui-react';
import './User.css';

const User = () => {
  const username=useParams().username;
  const [userData, setUserData] = useState([]);
  const [userc, setc] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      setUserData(await getData(username));
    };
/*
    const fetchc = async () => {
      setUserData(await getCommits(username));
    };
*/
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
            (@{userData.login})
          </h1>
        }
        {!userData.name &&
          <h1>
          <i aria-hidden="true" class="at icon"></i>
            {userData.login}
          </h1>
        }
        {userData.bio &&
          <h2>
            <i aria-hidden="true" class="map pin icon"></i>
            {userData.bio}
          </h2>
        }
        <div className="info">
        {userData.location &&
          <h3>
            <i aria-hidden="true" class="map marker icon"></i>
            {userData.location}
          </h3>
        }

        {userData.company &&
          <h3>
          <i aria-hidden="true" class="building outline icon"></i>
            {userData.company}
          </h3>
        }

        {userData.created_at &&
          <h3>
          <i aria-hidden="true" class="calendar alternate outline icon"></i>
          {new Date(userData.created_at).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}

          </h3>
        }
        </div>
        {userData.email &&
          <h3>
          <i aria-hidden="true" class="mail icon"></i>
            {userData.email}
          </h3>
        }
      </div>
  );
}

export default User;
