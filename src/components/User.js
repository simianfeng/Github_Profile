import React, { useState, useEffect } from 'react';
import { getData,getSum } from '../Sever/Api';
import { useParams } from 'react-router-dom';
import { Card} from 'semantic-ui-react';
import './User.css';

const User = () => {
  const username=useParams().username;
  const [userData, setUserData] = useState([]);
  const [userSum, setSum] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      setUserData(await getData(username));
    };
    const fetchSum = async () => {
      setSum(await getSum(username));
    };

    fetchUser();
    fetchSum();
  }, []);

  const items = [
  {
    header: 'Repos',
    description:
      userData.public_repos
  },
  {
    header: 'Followers',
    description:
      userData.followers
  },
  {
    header: 'Stars',
    description:
      userSum.totalstar
  },
  {
    header: 'Forks',
    description:
      userSum.totalfork
  }
]

  return(
      //console.log(userData),

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
            Joined{' '}
              {new Date(userData.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              }
            )
            }
          </h3>
        }
      </div>
      <Card.Group centered  items={items}  />
      </div>
  );
}

export default User;
