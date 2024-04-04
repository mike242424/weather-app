import { Text, View } from 'react-native';
import { style } from './Home.style';
import Txt from '../../components/Txt/Txt';
import BasicWeather from '../../components/BasicWeather/BasicWeather';

const Home = ({ weatherData }) => {
  console.log(weatherData.current_weather);
  return (
    <>
      <View style={style.basicWeatherContainer}>
        <BasicWeather weatherData={weatherData} />
      </View>
      <View style={style.inputContainer}>
        <Txt anotherStyle={{ fontSize: 30 }}>Input</Txt>
      </View>
      <View style={style.advancedWeatherContainer}>
        <Txt>Advanced Weather</Txt>
      </View>
    </>
  );
};

export default Home;
