import React, { useState, useEffect } from 'react';
import { getRepoData} from '../Sever/Api';
import { useParams } from 'react-router-dom';
import {  Icon, Image,Card,Button} from 'semantic-ui-react';

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
      <div>
       {repoData.map(repo => (
      <Card.Group centered>
        <Card>
          <Card.Content>
            <Card.Header>{repo.name}</Card.Header>
            <Card.Meta>{repo.language}</Card.Meta>
            <Card.Description>
              {repo.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <i class="check icon"></i>
                {repo.stargazers_count} stars
            <i class="check icon"></i>
                {repo.forks} forks
            <i class="check icon"></i>
                {repo.size} size
          </Card.Content>
        </Card>
      </Card.Group>
))}
</div>
    )
}

export default TopRepo;
