const initialState = {
    loading: false,
    data: [],
    error: ''
  };
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_STANDINGS':
        return {
          ...state,
          loading: true
        };
      case 'STANDINGS_RECEIVED':
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: ""
        };
      case 'STANDINGS_ERROR':
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        }
        default: return state;
    }
    
  };