import {useEffect, useState} from "react";
import axios from "axios";
import Weather from "../components/weatherContentPage/Weather";
import Loader from "../components/weatherContentPage/Loader";
import Cities from "../components/Cities";
import styles from './home.module.scss'
import {connect} from "react-redux";
import Layout from "../components/layout/Layout";


const Index = ({city}) => {
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
    return (
      <Layout>
        <Loader />
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={styles.root}>
        <Cities/>
        <Weather
          weather={weather}
        />
      </div>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    city: state.city.cityName
  }
}

export default connect(
  mapStateToProps,
)
(Index);
