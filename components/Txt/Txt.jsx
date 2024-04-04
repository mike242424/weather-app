import { Text } from 'react-native';
import { style } from './Txt.style';

const Txt = ({ children, anotherStyle, ...restProps }) => {
  console.log(style.text, anotherStyle);

  return (
    <Text style={[style.text, anotherStyle]} {...restProps}>
      {children}
    </Text>
  );
};

export default Txt;
