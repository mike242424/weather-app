import { Text } from 'react-native';
import { style } from './Txt.style';

const Txt = ({ children, anotherStyle, ...restProps }) => {
  return (
    <Text style={[style.text, anotherStyle]} {...restProps}>
      {children}
    </Text>
  );
};

export default Txt;
