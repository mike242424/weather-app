import { Text, View } from 'react-native';
import { style } from './Home.style';
import Txt from '../../components/Txt/Txt';
import BasicWeather from '../../components/BasicWeather/BasicWeather';
import { getWeatherInterpretation } from '../../utils/weatherMatrix';
import AdvancedWeather from '../../components/AdvancedWeather/AdvancedWeather';

const Home = ({ weatherData, city }) => {
  const currentInterpretation = getWeatherInterpretation(
    weatherData.current_weather.weathercode,
  );

  return (
    <>
      <View style={style.basicWeatherContainer}>
        <BasicWeather
          weatherData={weatherData}
          weatherInterpretation={currentInterpretation}
          city={city}
        />
      </View>
      <View style={style.inputContainer}>
        <Txt anotherStyle={{ fontSize: 30 }}>Input</Txt>
      </View>
      <View style={style.advancedWeatherContainer}>
        <AdvancedWeather weatherData={weatherData} />
      </View>
    </>
  );
};

export default Home;
