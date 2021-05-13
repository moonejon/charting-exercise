import React from "react";
import { VictoryBar, VictoryChart, VictoryLabel, VictoryPie, VictoryTooltip } from "victory";
import { TEAM_PRIMARY_COLOR } from "./constants";

const BarChart = (stats) => {

  return (
    <VictoryChart domainPadding={{ x: 30 }}>
        <VictoryLabel
            text={`${stats.stats.name}`}
            x={225}
            y={18}
            textAnchor="middle"
            style={{ fontSize: 22 }}
          />
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
    </VictoryChart>
  );
};

const PieChart = (stats) => {
  return (
    <svg viewBox="0 0 400 400">
      <VictoryPie
        style={{
          data: {
            fill: ({ datum }) => TEAM_PRIMARY_COLOR[datum.name],
          },
          labels: { fill: "white" }
        }}
        standalone={false}
        data={stats.stats.teams}
        labels={({ datum }) => `${datum.name}: ${datum.wins}`}
        innerRadius={50} labelRadius={85}
        x="name"
        y="wins"
        width={400}
        height={400}
      ></VictoryPie>
      <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20 }}
          x={200} y={200}
          text={`${stats.stats.name}`}
        />
      </svg>
  );
};

export default function DivisionStandings(props) {
    const {division, chartType} = props;

  return (
    <div id="standings">
    <div id="division-container" className="shadow">
    {chartType === 'bar' ? (
      <BarChart stats={division} />
    ) : (
      <PieChart stats={division} />
    )
    }
    </div>
    </div>
  );
}
