import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LEAGUE_IDS, DIVISION_IDS, TEAM_ABBREV } from "./constants";
import { getStandings } from "./store/actions";
import "./App.scss";
import DivisionStandings from "./DivisionStandings";

function App() {
  const dispatch = useDispatch();

  const [statisticsByDivision, setStatisticsByDivision] = useState();
  const [chartType, setChartType] = useState('bar');

  useEffect(() => {
    dispatch(getStandings());
  }, [dispatch]);

  const standingsData = useSelector((state) => state.data);

  useEffect(() => {
    const refinedStandingsData = standingsData.map((x) => {
      return {
        name: DIVISION_IDS[x.division.id],
        league: LEAGUE_IDS[x.league.id],
        teams: x.teamRecords.map((y) => {
          return {
            name: TEAM_ABBREV[y.team.name],
            wins: y.wins,
          };
        }),
      };
    });

    setStatisticsByDivision(refinedStandingsData);
  }, [standingsData]);

  return (
    <div className="App">
      <div id="header">
        <div id="title">2021 MLB Win Totals</div>
        <button onClick={() => chartType === 'bar' ? setChartType('pie') : setChartType('bar')}>Change Display Type</button>
      </div>
      <div className="league-container">
        {statisticsByDivision
          ?.filter((division) => division.league === "American League")
          .map((division) => (
            <DivisionStandings key={division.name} division={division} chartType={chartType}/>
          ))}
      </div>
      <div className="league-container">
      {statisticsByDivision
          ?.filter((division) => division.league === "National League")
          .map((division) => (
            <DivisionStandings key={division.name} division={division} chartType={chartType}/>
          ))}
      </div>
    </div>
  );
}

export default App;
