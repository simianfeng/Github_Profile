import React from 'react';
import './App.css';
import UserInput from './pages/Userinput';
import { fetchData } from './Sever/Api';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }


  render() {
    const { data } = this.state;

    return (
        <data />
    );
  }
}

export default App;
