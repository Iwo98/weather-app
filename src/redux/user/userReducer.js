const initialState = {
  isLogged: false,
  name: 'Jan',
  surname: 'Kowalski',
  age: 18
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_USER':
      return {
        ...initialState,
        isLogged: true,
      };
    case 'LOG_OUT_USER':
      return {
        ...initialState,
        isLogged: false,
      };
    default:
      return state;
  }
}

export default userReducer;