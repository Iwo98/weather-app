import {useEffect, useState} from "react";
import axios from "axios";
import Weather from "../components/weatherContentPage/Weather";
import Loader from "../components/weatherContentPage/Loader";
import Cities from "../components/Cities";
import styles from './home.module.scss'
import { useSelector} from "react-redux";

function Home() {
  const city = useSelector(state => state.cityReducer);
  const [weather, setWeather] = useState();

  const getWeather = async (city) => {
    try {
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`);

      setWeather({
        temp: data.main.temp,
        feel_temp: data.main.feels_like,
        description: data.weather[0].description,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    void getWeather(city)
  }, [city])

  if (!weather) {
    return <Loader/>;
  }

  return (
    <div className={styles.root}>
      <Cities />
      <Weather
        weather={weather}
      />
    </div>
  );
}

export default Home;
