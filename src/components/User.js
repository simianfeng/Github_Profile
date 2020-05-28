import React, { useState, useEffect } from 'react';
import { getData,getRepoData,getLanguageData,getUsercommits } from '../Sever/Api';
import { useParams } from 'react-router-dom';
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
        {userData.location}
    </div>
  );
}

export default User;
