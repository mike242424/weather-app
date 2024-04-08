import { style } from './Forecast.style';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import ForecastDay from '../../components/ForecastDay/ForecastDay';
import { _Image, View } from 'react-native';
import { DAYS, getWeatherInterpretation } from '../../utils/weatherMatrix';

const Forecast = () => {
  const { params } = useRoute();

  const forecastList = (
    <View style={{ marginTop: 50 }}>
      {params.daily.time.map((time, index) => {
        const weatherCode = params.daily.weathercode[index];
        const image = getWeatherInterpretation(weatherCode).image;
        const temperature = params.daily.temperature_2m_max[index];
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const fortmattedDate = date.toLocaleDateString('default', {
          day: 'numeric',
          month: 'numeric',
        });

        return (
          <ForecastDay
            key={time}
            image={image}
            day={fortmattedDate}
            date={dayOfTheWeek}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );

  return (
    <>
      <Header city={params.city} />
      {forecastList}
    </>
  );
};

export default Forecast;
