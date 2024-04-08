import { Image, View } from 'react-native';
import Txt from '../Txt/Txt';
import { style } from './ForecastDay.style';

const ForecastDay = ({ image, day, date, temperature }) => {
  return (
    <View style={style.container}>
      <Image source={image} style={style.image} />
      <Txt anotherStyle={style.day}>{day}</Txt>
      <Txt anotherStyle={style.date}>{date}</Txt>
      <Txt anotherStyle={style.temperature}>{temperature}°</Txt>
    </View>
  );
};

export default ForecastDay;
