import React, { useState, useEffect } from 'react';
import { getRepoData} from '../Sever/Api';
import { useParams } from 'react-router-dom';
import {  Icon, Image,Card} from 'semantic-ui-react';

const TopRepo = () => {
  const username=useParams().username;
  const [repoData, setRepoData] = useState([]);
  const [sortType, setSortType] = useState('stars');

  useEffect(() => {
    const fetchRepo = async () => {
      setRepoData(await getRepoData(username));
    };

    fetchRepo();
  }, []);
    return(
      <div class="ui three column grid">
        <div class="column">
          <div class="ui fluid card">
            <div class="content">
              <i class="right floated like icon"></i>
              <i class="right floated star icon"></i>
              <div class="header">Cute Dog</div>
              <div class="description">
                <p></p>
              </div>
            </div>
            <div class="extra content">
              <span class="left floated like">
                <i class="like icon"></i>
                Like
              </span>
              <span class="right floated star">
                <i class="star icon"></i>
                Favorite
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TopRepo;
