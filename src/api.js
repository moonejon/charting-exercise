const MLBStatsAPI = require("mlb-stats-api");
const mlbStats = new MLBStatsAPI();

export const fetchCurrentStandings = () => {
    return mlbStats.getStandings({params: {leagueId: "103, 104", season: 2021}})
}