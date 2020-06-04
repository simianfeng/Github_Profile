import React, { useState, useEffect } from 'react';
import { getRepoData} from '../Sever/Api';
import { useParams } from 'react-router-dom';
import {  Icon, Image,Card,Button, Form, Checkbox} from 'semantic-ui-react';
import './TopRepo.css';

const TopRepo = () => {
  const username=useParams().username;
  const [repoData, setRepoData] = useState([]);
  const [type, setType] = useState('stargazers_count');
  useEffect(() => {
    const fetchRepo = async () => {
      setRepoData(await getRepoData(username));
    };

    fetchRepo();
  }, []);

  repoData.sort((a, b) => {
        if (type==='stargazers_count'){
          if (a.stargazers_count > b.stargazers_count) return -1
          else if (a.stargazers_count < b.stargazers_count) return 1
          return 0}
        else if(type==='size')
        {
          if (a.size > b.size) return -1
          else if (a.size < b.size) return 1
          return 0}

        else
          {
            if (a.forks > b.forks) return -1
            else if (a.forks < b.forks) return 1
            return 0
          }
        }
      )
    const handleChange = e => setType(e.target.value);
    const LIMIT=6
    return(
      <div class="Sorting">
      <label className='repo_sort'>Top Repo Sorting</label>
      <form className="form">
          <input type="radio" name="Stars " label="Stars" checked={type === 'stargazers_count'} value='stargazers_count' onClick={() => setType('stargazers_count')} />
          <h3> Stars </h3>
          <input type="radio" name="Forks "label="Forks" checked={type === 'forks'} value='forks' onClick={() => setType('forks')} />
          <h3>  Forks </h3>
          <input type="radio" name="Size " label="Size" checked={type === 'size'} value='size' onClick={() => setType('size')} />
          <h3>  Size </h3>
      </form>


      <Card.Group centered itemsPerRow={3}>
      {repoData.slice(0,LIMIT).map(repo => (
          <Card>
          <Card.Content header={repo.name} />
          <Card.Content description={repo.description} />
          <Card.Content extra>

            <Icon name='star' /> {repo.stargazers_count} stars ,
            <Icon name='fork' /> {repo.forks} forks ,
            <Icon name='file' /> {repo.size} kb

          </Card.Content>
        </Card>
        ))}
      </Card.Group>
</div>
    )
}

export default TopRepo;
