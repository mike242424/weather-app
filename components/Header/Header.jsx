import { TouchableOpacity, View } from 'react-native';
import Txt from '../Txt/Txt';
import { style } from './Header.style';
import { useNavigation } from '@react-navigation/native';

const Header = ({ city }) => {
  const nav = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={nav.goBack} style={style.backButton}>
        <Txt>{'<'}</Txt>
      </TouchableOpacity>

      <View style={style.textContainer}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt anotherStyle={style.subTitle}>7 Day Forecast</Txt>
      </View>
    </View>
  );
};

export default Header;
