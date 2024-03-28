import { Text, View } from 'react-native';
import { style } from './Home.style';
import Txt from '../../components/Txt/Txt';

const Home = () => {
  return (
    <>
      <View style={style.basicWeatherContainer}>
        <Txt>Basic Weather</Txt>
      </View>
      <View style={style.inputContainer}>
        <Txt anotherStyle={{ fontSize: 90 }}>Input</Txt>
      </View>
      <View style={style.advancedWeatherContainer}>
        <Txt>Advanced Weather</Txt>
      </View>
    </>
  );
};

export default Home;
