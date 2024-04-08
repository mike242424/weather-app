import { Image, Text, View } from 'react-native';
import Txt from '../Txt/Txt';
import { style } from './BasicWeather.style';
import Clock from '../Clock/Clock';

const BasicWeather = ({ weatherData, weatherInterpretation }) => {
  return (
    <>
      <View style={style.clock}>
        <Clock />
      </View>
      <View style={style.city}>
        <Txt>City</Txt>
      </View>
      <View style={style.interpretation}>
        <Txt anotherStyle={style.interpretationText}>
          {weatherInterpretation.label}
        </Txt>
      </View>
      <View style={style.temperatureContainer}>
        <Txt anotherStyle={style.temperature}>
          {Math.round(weatherData.current_weather.temperature)}°
        </Txt>
        <Image style={style.img} source={weatherInterpretation.image} />
      </View>
    </>
  );
};

export default BasicWeather;
