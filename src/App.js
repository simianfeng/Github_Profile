import React from 'react';
import './App.css';
import UserInput from './pages/Userinput';
import { fetchData,getRepoData } from './Sever/Api';

class App extends React.Component {
  state = {
    data: {},
    repos:{}
  }

  async componentDidMount() {
    const data = await fetchData ('leij11');
    const repos=await getRepoData('leij11');

    this.setState({ data,repos });
  }


  render() {
    const { data,repos } = this.state;

    return (
      console.log(data),
      console.log(repos),
        <UserInput />
    );
  }
}

export default App;
