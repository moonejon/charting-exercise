import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryPie, VictoryTooltip } from "victory";
import { TEAM_PRIMARY_COLOR } from "./constants";

const BarChart = (stats) => {
  console.log(stats.stats.teams);

  const sharedAxisStyles = {
    tickLabels: {
      fontSize: 13
    },
    axisLabel: {
      padding: 39,
      fontSize: 13,
      fontStyle: "italic"
    }
  };

  return (
    <VictoryChart domainPadding={{ x: 30 }}>
      <VictoryBar
        style={{
          data: {
            fill: ({ datum }) => TEAM_PRIMARY_COLOR[datum.name],
          },
        }}
        labels={({ datum }) => `wins: ${datum.wins}`}
        labelComponent={
          <VictoryTooltip flyoutHeight={30} constrainToVisibleArea />
        }
        data={stats.stats.teams}
        x="name"
        y="wins"
      />
      <VictoryAxis
        dependentAxis
        label="Total # of Wins"
        style={sharedAxisStyles}
      />
    </VictoryChart>
  );
};

const PieChart = (stats) => {
  return (
      <VictoryPie
        style={{
          data: {
            fill: ({ datum }) => TEAM_PRIMARY_COLOR[datum.name],
          }
        }}
        data={stats.stats.teams}
        labels={({ datum }) => `${datum.name}: ${datum.wins}`}
        x="name"
        y="wins"
        width={500}
      ></VictoryPie>
  );
};

export default function DivisionStandings(props) {
    const {division, chartType} = props;
    console.log(division, chartType);

  return (
    <div id="standings">
    {chartType === 'bar' ? (
      <BarChart stats={division} />
    ) : (
      <PieChart stats={division} />
    )
    }
    </div>
  );
}
