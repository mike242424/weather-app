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
import { fetchCityByCoords, fetchWeatherByCoords } from './api/meteo';
import { useFonts } from 'expo-font';

const App = () => {
  const [coordinates, setCoordinates] = useState();
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState();

  const [isFontLoaded] = useFonts({
    'Roboto-Mono': require('./assets/fonts/RobotoMonoFont.ttf'),
  });

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchCity(coordinates);
      fetchWeather(coordinates);
    }
  }, [coordinates]);

  async function fetchWeather(coords) {
    const fetchedWeatherData = await fetchWeatherByCoords(coords);
    setWeatherData(fetchedWeatherData);
  }

  async function fetchCity(coords) {
    const cityData = await fetchCityByCoords(coords);
    console.log(cityData);
    setCity(cityData);
  }

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

  console.log(coordinates);

  return (
    <ImageBackground
      imageStyle={style.img}
      source={backgroundImg}
      style={style.imgBackground}
    >
      <SafeAreaProvider>
        <SafeAreaView style={style.container}>
          {isFontLoaded && weatherData && (
            <Home weatherData={weatherData} city={city} />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default App;
