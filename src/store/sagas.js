import { call, put, takeLatest, all } from "redux-saga/effects";
const MLBStatsAPI = require("mlb-stats-api");
const mlbStats = new MLBStatsAPI();

const GET_STANDINGS = "GET_STANDINGS";
const STANDINGS_RECEIVED = "STANDINGS_RECEIVED";
const STANDINGS_ERROR = "STANDINGS_ERROR";

export const getStandings = () => {
  return {
    type: GET_STANDINGS,
    loading: true,
  };
};

const standingsReceived = (data) => {
  return {
    type: STANDINGS_RECEIVED,
    payload: data,
  };
};

const standingsError = (error) => {
  return {
    type: STANDINGS_ERROR,
    payload: error,
  };
};

function* fetchStandings() {
  console.log("HELLO");
  try {
    const result = yield(mlbStats.getStandings({params: {leagueId: "103, 104", season: 2021}}))
    console.log(result);
    yield put(standingsReceived(result));
  } catch (err) {
    yield call(standingsError(err.message));
    console.log(err.message);
  }
}

export default function* mySaga() {
  yield takeLatest("GET_STANDINGS", fetchStandings);
}
