export const chooseCity = (cityName = 'Paris') =>  {
  return {
    type: 'CHOOSE_CITY',
    payload: cityName
  }
}