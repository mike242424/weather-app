import { style } from './Forecast.style';
import Txt from '../../components/Txt/Txt';
import { useRoute } from '@react-navigation/native';

const Forecast = () => {
  const { params } = useRoute();

  return <Txt>Forecast</Txt>;
};

export default Forecast;
