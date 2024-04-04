import { Text, View } from 'react-native';
import { style } from './Home.style';
import Txt from '../../components/Txt/Txt';
import BasicWeather from '../../components/BasicWeather/BasicWeather';
import { getWeatherInterpretation } from '../../utils/weatherMatrix';

const Home = ({ weatherData }) => {
  const currentInterpretation = getWeatherInterpretation(
    weatherData.current_weather.weathercode,
  );

  return (
    <>
      <View style={style.basicWeatherContainer}>
        <BasicWeather
          weatherData={weatherData}
          weatherInterpretation={currentInterpretation}
        />
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
