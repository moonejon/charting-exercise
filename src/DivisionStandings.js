import React from "react";
import { VictoryBar, VictoryChart, VictoryTooltip } from "victory";
import {TEAM_PRIMARY_COLOR} from './constants';

const BarChart = (stats) => {
  console.log(stats.stats.division.teams);
  return (
    <VictoryChart domainPadding={{ x: 30 }}>
      <VictoryBar style={{
          data: {
            fill: ({ datum }) => datum.name === 'HOU' || 'OAK' || 'SEA' || 'LAA' || 'TEX' ? TEAM_PRIMARY_COLOR[datum.name] : "#00000"
          }  }}
          labels={({ datum }) => `wins: ${datum.wins}`}
          labelComponent={<VictoryTooltip   flyoutHeight={30} constrainToVisibleArea/>}
            data={stats.stats.division.teams}  x="name" y="wins" />
    </VictoryChart>
  );
};

export default function DivisionStandings(stats) {
  return <BarChart stats={stats} />;
}
