import { Image, Text, View } from 'react-native';
import Txt from '../Txt/Txt';
import { style } from './BasicWeather.style';

const BasicWeather = ({ weatherData }) => {
  return (
    <>
      <View style={style.clock}>
        <Txt>{new Date().toLocaleTimeString()}</Txt>
      </View>
      <View style={style.city}>
        <Txt>City</Txt>
      </View>
      <View style={style.interpretation}>
        <Txt anotherStyle={style.interpretationText}>Sunny</Txt>
      </View>
      <View style={style.temperatureContainer}>
        <Txt anotherStyle={style.temperature}>
          {weatherData.current_weather.temperature}°
        </Txt>
        <Image style={style.img} />
      </View>
    </>
  );
};

export default BasicWeather;
