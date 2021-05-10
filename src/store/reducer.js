import {call, put} from 'redux-saga/effects';
const MLBStatsAPI = require('mlb-stats-api');
const mlbStats = new MLBStatsAPI();

const initialState = {
    loading: false,
    data: [],
    error: ''
  };
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'START_FETCH':
        return {
          ...state,
          loading: true
        };
      case 'PROCESS_FETCH':
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: ""
        };
      case 'END_FETCH':
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        }
        default: return state;
    }
    
  };
  const START_FETCH = 'START_FETCH';
  const PROCESS_FETCH = 'PROCESS_FETCH';
  const END_FETCH = 'END_FETCH';

  let startFetch = () => {
    return {
      type: START_FETCH,
      loading: true
    }
  };
  
  let processFetch = (data) => {
    return {
      type: PROCESS_FETCH,
      payload: data
    }
  };
  
  let endFetch = (error) => {
    return {
      type: END_FETCH,
      payload: error
    }
  };

  export function* fetchStandingsSaga(payload){
    try {
        yield put(startFetch());
        const result = yield (mlbStats.getStandings({params: {leagueId: payload.leagueId, season: payload.season}}))
        yield put (processFetch(result.data.records));
    } catch(err) {
        yield call(endFetch(err.message));
        console.log(err.message);
    }
};