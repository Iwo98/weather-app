const initialState = {
  cityName: 'Paris'
}

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_CITY':
      return {
        cityName: action.payload
      };
    default:
      return state;
  }
}

export default cityReducer;