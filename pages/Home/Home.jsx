import { Text, View } from 'react-native';
import { style } from './Home.style';
import Txt from '../../components/Txt/Txt';
import BasicWeather from '../../components/BasicWeather/BasicWeather';
import { getWeatherInterpretation } from '../../utils/weatherMatrix';
import AdvancedWeather from '../../components/AdvancedWeather/AdvancedWeather';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = ({ weatherData, city, onSubmit }) => {
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
        <SearchBar onSubmit={onSubmit} />
      </View>
      <View style={style.advancedWeatherContainer}>
        <AdvancedWeather weatherData={weatherData} />
      </View>
    </>
  );
};

export default Home;
