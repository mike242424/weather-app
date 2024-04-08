import axios from 'axios';

export async function fetchWeatherByCoords(coords) {
  const res = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`,
  );

  return res.data;
}

export async function fetchCityByCoords(coords) {
  const res = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`,
  );

  const {
    address: { city, village, town },
  } = res.data;

  return city || village || town;
}
