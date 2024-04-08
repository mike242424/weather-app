import { StyleSheet, View } from 'react-native';
import Txt from '../Txt/Txt';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000004b',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
  },
});

export function StyledContainer({ children }) {
  return <View style={{ alignItems: 'center' }}>{children}</View>;
}

export function StyledLabel({ children }) {
  return <Txt anotherStyle={{ fontSize: 15 }}>{children}</Txt>;
}

export function StyledValue({ children }) {
  return <Txt anotherStyle={{ fontSize: 20 }}>{children}</Txt>;
}
