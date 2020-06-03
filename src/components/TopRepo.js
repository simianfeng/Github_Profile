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
    const handleChange = e => setType(e.target.value);
              console.log(type)
    return(
      <div>
      <label>
         <input type="radio" value="option1" checked={true} />
         Option 1
       </label>
      /*
      <Form>
        <Form.Field>
          <Checkbox
            radio
            label='Stars'
            name='checkboxRadioGroup'
            value='stargazers_count'
            checked={type === 'stargazers_count'}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Forks'
            name='checkboxRadioGroup'
            value='forks'
            checked={type === 'forks'}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Size'
            name='checkboxRadioGroup'
            value='size'
            checked={type === 'size'}
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
      */
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
