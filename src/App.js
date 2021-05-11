import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux'
import {LEAGUE_IDS, DIVISION_IDS, TEAM_IDS } from './constants'
import {getStandings} from './store/sagas'
import './App.css';

function App() {
  const dispatch = useDispatch();

  const [statisticsByDivision, setStatisticsByDivision] = useState();

  useEffect(() => {
    dispatch(getStandings());
  }, [dispatch]);

  const standingsData = useSelector(state => state.data);

  useEffect(() => {
  const refinedStandingsData = standingsData.map(x => {
    return {
      league: LEAGUE_IDS[x.league.id],
      division: DIVISION_IDS[x.division.id],
      teams: x.teamRecords.map(y => {
        return {
          name: y.team.name,
          wins: y.wins
        }
      })
    }
  } )

  setStatisticsByDivision(refinedStandingsData);
}, [standingsData]);




  return (
    <div className="App">

    </div>
  );
}

export default App;
