import styles from './Cities.module.scss'
import classnamesBind from 'classnames/bind';
import { useDispatch, useSelector } from "react-redux";
import { chooseCity } from "../redux/actions";


const classnames = classnamesBind.bind(styles);
const cityNames = ['Paris', 'London', 'Reykjavik'];

const Cities = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector(state => state.cityReducer)

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
          onClick={() => dispatch(chooseCity(city))}
          type='button'
        >
          {city}
        </button>
      ))}
    </div>
  );
}

export default Cities;
