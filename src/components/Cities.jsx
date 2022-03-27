import styles from './Cities.module.scss'
import classnamesBind from 'classnames/bind';

const classnames = classnamesBind.bind(styles);


const CityNames = ['Paris', 'London', 'Reykjavik'];

const Cities = ({setCity, activeCity}) => (
  <div className={styles.root}>
    {CityNames.map((city) => (
      <button
        className={classnames(
          'city',
          {
            'active': activeCity === city,
          }
        )}
        key={city}
        onClick={() => setCity(city)}
        type='button'
      >
        {city}
      </button>
    ))}
  </div>
);

export default Cities;
