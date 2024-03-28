import { Text, View } from 'react-native';
import { style } from './Home.style';

const Home = () => {
  return (
    <>
      <View style={style.basicWeatherContainer}>
        <Text style={style.text}>Basic Weather</Text>
      </View>
      <View style={style.inputContainer}>
        <Text style={style.text}>Input</Text>
      </View>
      <View style={style.advancedWeatherContainer}>
        <Text style={style.text}>Advanced Weather</Text>
      </View>
    </>
  );
};

export default Home;
