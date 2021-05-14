import { call, put, takeLatest } from "redux-saga/effects";
import { standingsReceived, standingsError} from './actions';
import {fetchCurrentStandings} from '../api';

function* fetchStandings() {
  try {
    const result = yield(fetchCurrentStandings());
    yield put(standingsReceived(result.data.records));
  } catch (err) {
    yield call(standingsError(err.message));
    console.log(err.message);
  }
}

export default function* mySaga() {
  yield takeLatest("GET_STANDINGS", fetchStandings);
}
