const cityReducer = (state = 'Paris', action) => {
  switch (action.type) {
    case 'chooseCity':
      return action.city;
    default:
      return state;
  }
}

export default cityReducer;