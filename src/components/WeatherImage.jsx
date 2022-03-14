import styled from 'styled-components';
import { useEffect, useState } from "react";


const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
`;

const descriptions = [
  {description: 'clear sky', fileName: 'sunny'},
  {description: 'few clouds', fileName: 'cloudy'},
  {description: 'scattered clouds', fileName: 'cloudy'},
  {description: 'broken clouds', fileName: 'cloudy'},
  {description: 'shower rain', fileName: 'rainy'},
  {description: 'rain', fileName: 'rainy'},
  {description: 'thunderstorm', fileName: 'storm'},
  {description: 'snow', fileName: 'snowy'},
]

const WeatherImage = ({ weatherDescription }) => {
  const [image, setImage] = useState('sunny');

  const changeImage = () => {
    const foundImageName = descriptions.find(({ description }) => description === weatherDescription);

    setImage(foundImageName?.fileName);
  }

  useEffect(() => {
    changeImage();
  }, [weatherDescription])

  return (
    <Image src={`/${image}.png`} />
  );
};

export default WeatherImage