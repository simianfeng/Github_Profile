import React, { useState, useEffect } from 'react';
const Chart = require('chart.js');

const Piechart = ({ repoData }) => {
// Create Most Starred chart
const [starChartData, setStarChartData] = useState([]);

const initStarChart = () => {
  const ctx = document.getElementById('starChart');
  const LIMIT = 10;
  const sortProperty = 'stargazers_count';
  const mostStarredRepos = repoData
    .filter(repo => !repo.fork)
    .sort((a, b) => b[sortProperty] - a[sortProperty])
    .slice(0, LIMIT);
  const labels = mostStarredRepos.map(repo => repo.name);
  const data = mostStarredRepos.map(repo => repo[sortProperty]);

  setStarChartData(data);



}
return(starChartData)


}

export default Piechart;
