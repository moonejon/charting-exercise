const GET_STANDINGS = "GET_STANDINGS";
const STANDINGS_RECEIVED = "STANDINGS_RECEIVED";
const STANDINGS_ERROR = "STANDINGS_ERROR";

export const getStandings = () => {
  return {
    type: GET_STANDINGS,
    loading: true,
  };
};

export const standingsReceived = (data) => {
  return {
    type: STANDINGS_RECEIVED,
    payload: data,
  };
};

export const standingsError = (error) => {
  return {
    type: STANDINGS_ERROR,
    payload: error,
  };
};