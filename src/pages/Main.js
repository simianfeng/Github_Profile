import React, { useState, useEffect } from 'react';
import { getData,getRepoData } from '../Sever/Api';

const Main = props => {
  const [userData, setUserData] = useState([]);
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      setUserData(await getData('leij11'));
    };
    const fetchRepo = async () => {
      setRepoData(await getRepoData('leij11'));
    };
    fetchUser();
    fetchRepo();
  }, []);

  return (
    console.log(userData),
    console.log(repoData),
    <div>
      mainpage
    </div>
  );
}

export default Main;
