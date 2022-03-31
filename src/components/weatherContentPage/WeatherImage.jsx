import { useEffect, useState } from "react";
import styles from './WeatherImage.module.scss'

const descriptions = [
  {description: 'clear sky', fileName: 'sunny'},
  {description: 'few clouds', fileName: 'cloudy'},
  {description: 'scattered clouds', fileName: 'cloudy'},
  {description: 'overcast clouds', fileName: 'cloudy'},
  {description: 'broken clouds', fileName: 'cloudy'},
  {description: 'shower rain', fileName: 'rainy'},
  {description: 'rain', fileName: 'rainy'},
  {description: 'light rain', fileName: 'rainy'},
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
    <img className={styles.root} src={`${process.env.PUBLIC_URL}/${image}.png`} alt={image} />
  );
};

export default WeatherImage