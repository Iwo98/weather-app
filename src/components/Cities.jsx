import styles from './Cities.module.scss'
import classnamesBind from 'classnames/bind';
import { connect } from "react-redux";
import { chooseCity } from "../redux";


const classnames = classnamesBind.bind(styles);
const cityNames = ['Paris', 'London', 'Reykjavik'];

const Cities = ({ currentCity, chooseCity }) => {
  return (
    <div className={styles.root}>
      {cityNames.map((city) => (
        <button
          className={classnames(
            'city',
            {
              'active': currentCity === city,
            }
          )}
          key={city}
          onClick={() => chooseCity(city)}
          type='button'
        >
          {city}
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentCity: state.city.cityName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseCity: city => dispatch(chooseCity(city))  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
(Cities);