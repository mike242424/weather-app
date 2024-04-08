import { Text, useWindowDimensions } from 'react-native';
import { style } from './Txt.style';

const IPHONE_13_RATIO = 0.001072961373390558;

const Txt = ({ children, anotherStyle, ...restProps }) => {
  const fontSize = anotherStyle?.fontSize || style.text.fontSize;
  const { height } = useWindowDimensions();
  // console.log(Math.round(fontSize * IPHONE_13_RATIO * height));

  return (
    <Text
      style={[
        style.text,
        anotherStyle,
        { fontSize: Math.round(fontSize * IPHONE_13_RATIO * height) },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default Txt;
