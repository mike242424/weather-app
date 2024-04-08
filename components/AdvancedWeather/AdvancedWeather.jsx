import { View } from 'react-native';
import {
  style,
  StyledContainer,
  StyledLabel,
  StyledValue,
} from './AdvancedWeather.style';
import Txt from '../Txt/Txt';

const AdvancedWeather = ({ weatherData }) => {
  return (
    <View style={style.container}>
      <StyledContainer>
        <StyledValue>{weatherData.daily.sunrise[0].split('T')[1]}</StyledValue>
        <StyledLabel>Sunrise</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{weatherData.daily.sunset[0].split('T')[1]}</StyledValue>
        <StyledLabel>Sunset</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{weatherData.current_weather.windspeed} km/h</StyledValue>
        <StyledLabel>Wind Speed</StyledLabel>
      </StyledContainer>
    </View>
  );
};

export default AdvancedWeather;
