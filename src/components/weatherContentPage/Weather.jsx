import WeatherImage from "./WeatherImage";
import styles from './Weather.module.scss';


function Weather({weather}) {
  return (
    <div className={styles.root}>
      <WeatherImage weatherDescription={weather.description}/>
      <div className={styles.descriptions}>
        <div className={styles.description}>
          <span>Temperature: </span>
          <span className={styles.result}>{`${weather.temp} ℃`}</span>
        </div>
        <div className={styles.description}>
          <span>Sensed temperature: </span>
          <span className={styles.result}>{`${weather.feel_temp} ℃`}</span>
        </div>
        <div className={styles.description}>
          <span>Description: </span>
          <span>{weather.description}</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;