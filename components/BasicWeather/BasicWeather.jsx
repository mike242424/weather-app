import { Image, Text, TouchableOpacity, View } from 'react-native';
import Txt from '../Txt/Txt';
import { style } from './BasicWeather.style';
import Clock from '../Clock/Clock';
import { useNavigation } from '@react-navigation/native';

const BasicWeather = ({ weatherData, weatherInterpretation, city }) => {
  const nav = useNavigation();
  return (
    <>
      <View style={style.clock}>
        <Clock />
      </View>
      <View style={style.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={style.interpretation}>
        <Txt anotherStyle={style.interpretationText}>
          {weatherInterpretation.label}
        </Txt>
      </View>
      <View style={style.temperatureContainer}>
        <TouchableOpacity
          onPress={() => nav.navigate('Forecast', { city, ...weatherData })}
        >
          <Txt anotherStyle={style.temperature}>
            {Math.round(weatherData.current_weather.temperature)}°
          </Txt>
        </TouchableOpacity>
        <Image style={style.img} source={weatherInterpretation.image} />
      </View>
    </>
  );
};

export default BasicWeather;
