import { Text, View } from 'react-native';
import { style } from './Home.style';

const Home = () => {
  return (
    <>
      <View style={style.basicWeatherContainer}>
        <Text>Basic Weather</Text>
      </View>
      <View style={style.inputContainer}>
        <Text>Input</Text>
      </View>
      <View style={style.advancedWeatherContainer}>
        <Text>Advanced Weather</Text>
      </View>
    </>
  );
};

export default Home;
