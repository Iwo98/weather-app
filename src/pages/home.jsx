import {useEffect, useState} from "react";
import styled from 'styled-components';
import axios from "axios";
import Weather from "../components/Weather";
import Loader from "../components/Loader";

const Wrapper = styled.div`
  background: linear-gradient(0deg,
  rgba(2, 0, 36, 1) 0%,
  rgba(50, 167, 186, 0.8911939775910365) 0%,
  rgba(50, 167, 186, 0.44861694677871145) 100%);
  padding: 50px 30px 30px;
  border-radius: 30px;
  width: 100%;
`;

const CityWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const City = styled.button`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  background: 0;
  border: 0;
  cursor: pointer;
`;

const Cities = ['Paris', 'London', 'Reykjavik'];

function Home() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState('Gdańsk');

  console.log()

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
    <Wrapper>
      <CityWrapper>
        {Cities.map((city) => (
          <City
            key={city}
            onClick={() => setCity(city)}
            type='button'
          >
            {city}
          </City>
        ))}
      </CityWrapper>
      <Weather
        weather={weather}
      />
    </Wrapper>
  );
}

export default Home;
