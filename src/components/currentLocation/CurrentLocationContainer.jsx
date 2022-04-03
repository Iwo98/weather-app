import {connect} from "react-redux";
import CurrentLocation from "./CurrentLocation";


const CurrentLocationContainer = ({currentCity}) => (
  <CurrentLocation
    currentCity={currentCity}
  />
);

const mapStateToProps = state => {
  return {
    currentCity: state.city.cityName
  }
}

export default connect(
  mapStateToProps,
)
(CurrentLocationContainer);