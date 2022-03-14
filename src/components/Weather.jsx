import styled from 'styled-components';
import WeatherImage from "./WeatherImage";


const Wrapper = styled.section`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherDescriptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin: 80px 0 0;
`;

const WeatherDescription = styled.div`
  display: flex;
  gap: 0 10px;
`;

const WeatherFeature = styled.span`
`;

const WeatherResult = styled.span`
  font-weight: 600;
  text-transform: capitalize;
`;

function Weather({weather}) {
  return (
    <Wrapper>
      <WeatherImage weatherDescription={weather.description}/>
      <WeatherDescriptions>
        <WeatherDescription>
          <WeatherFeature>Temperature: </WeatherFeature>
          <WeatherResult>{`${weather.temp} ℃`}</WeatherResult>
        </WeatherDescription>
        <WeatherDescription>
          <WeatherFeature>Sensed temperature: </WeatherFeature>
          <WeatherResult>{`${weather.feel_temp} ℃`}</WeatherResult>
        </WeatherDescription>
        <WeatherDescription>
          <WeatherFeature>Description: </WeatherFeature>
          <WeatherResult>{weather.description}</WeatherResult>
        </WeatherDescription>
      </WeatherDescriptions>
    </Wrapper>
  );
}

export default Weather;