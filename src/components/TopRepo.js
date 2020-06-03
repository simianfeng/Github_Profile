import React, { useState, useEffect } from 'react';
import { getRepoData} from '../Sever/Api';
import { useParams } from 'react-router-dom';
import {  Icon, Image,Card,Button, Form, Checkbox} from 'semantic-ui-react';

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
  //console.log(type)
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
//console.log(repoData)
    const handleChange = e => setType(e.target.value);

    return(
      <div>

      <Form.Group inline>
          <label>Top Repo Sorting</label>
          <Form.Radio label="Stars" checked={type === 'stargazers_count'} value='stargazers_count' onClick={() => setType('stargazers_count')} />
          <Form.Radio label="Forks" checked={type === 'forks'} value='forks' onClick={() => setType('forks')} />
          <Form.Radio label="Size" checked={type === 'size'} value='size' onClick={() => setType('size')} />
      </Form.Group>


      <div class="ui four cards">
       {repoData.map(repo => (
             <div class="ui card">
                <div class="content">
                  <div class="header">
                    {repo.name}
                  </div>
                  <div class="meta">
                    {repo.language}
                  </div>
                  <div class="description">
                    {repo.description}
                  </div>
                </div>
                  <div class="extra">
                  <i class="star icon"></i>
                      {repo.stargazers_count} stars
                  <i class="share alternate icon"></i>
                      {repo.forks} forks
                  <i class="check icon"></i>
                      {repo.size} KB
                  </div>

      </div>
    ))}
</div>

</div>
    )
}

export default TopRepo;
