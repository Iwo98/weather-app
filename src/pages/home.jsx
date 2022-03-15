import {useEffect, useState} from "react";
import styled from 'styled-components';
import axios from "axios";
import Weather from "../components/Weather";


const Wrapper = styled.div`
  background: linear-gradient(0deg,
  rgba(2, 0, 36, 1) 0%,
  rgba(50, 167, 186, 0.8911939775910365) 0%,
  rgba(50, 167, 186, 0.44861694677871145) 100%);
  padding: 50px;
  border-radius: 30px;
  width: 100%;
`;

const City = styled.h1`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: white;
  margin: 0;
`;


function Home() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState('Gdańsk');

  const getWeather = async (city) => {
    try {
      const lonlat = city === 'Warszawa' ? 'lat=52.229676&lon=21.012229' : 'lat=54.348290&lon=18.6540231';
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?${lonlat}&units=metric&appid=`);

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

  console.log(weather);

  return (
    <Wrapper>
      <City>{city}</City>
      <button
        onClick={() => setCity((prevState) => prevState === 'Warszawa' ? 'Gdańsk' : 'Warszawa')}
        type='button'
      >
        Change city
      </button>
      <Weather
        weather={weather}
      />
    </Wrapper>
  );
}

export default Home;
  
