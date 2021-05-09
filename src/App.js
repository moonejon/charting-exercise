import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';

function App() {
  const MLBStatsAPI = require('mlb-stats-api');
  const mlbStats = new MLBStatsAPI();

  useEffect(() => {

    mlbStats.getTeam({ pathParams: { teamId: 117 }});

    // mlbStats.getSchedule({params: {sportId: 1, teamId: 117, startDate:'01/01/2018', endDate: '12/31/2018'} });

    mlbStats.getStandings({params: {leagueId: 103, season: 2018}})
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
