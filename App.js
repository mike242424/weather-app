import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';
import Home from './pages/Home/Home';
import { ImageBackground } from 'react-native';
import backgroundImg from './assets/background.png';
import { useEffect, useState } from 'react';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { fetchWeatherByCoords } from './api/meteo';
import { useFonts } from 'expo-font';

const App = () => {
  const [coordinates, setCoordinates] = useState();
  const [weatherData, setWeatherData] = useState();

  const [isFontLoaded] = useFonts({
    'Roboto-Mono': require('./assets/fonts/RobotoMonoFont.ttf'),
  });

  console.log(isFontLoaded);

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    async function fetchWeather() {
      if (coordinates) {
        const fetchedWeatherData = await fetchWeatherByCoords(coordinates);

        setWeatherData(fetchedWeatherData);
      }
    }

    fetchWeather();
  }, [coordinates]);

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: '32.80', lng: '-80.00' });
    }
  }

  return (
    <ImageBackground
      imageStyle={style.img}
      source={backgroundImg}
      style={style.imgBackground}
    >
      <SafeAreaProvider>
        <SafeAreaView style={style.container}>
          {isFontLoaded && weatherData && <Home weatherData={weatherData} />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default App;
