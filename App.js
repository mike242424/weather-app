import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';
import Home from './pages/Home/Home';
import { ImageBackground } from 'react-native';
import backgroundImg from './assets/background.png';

const App = () => {
  return (
    <ImageBackground
      imageStyle={style.img}
      source={backgroundImg}
      style={style.imgBackground}
    >
      <SafeAreaProvider>
        <SafeAreaView style={style.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default App;
