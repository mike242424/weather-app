import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  day: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  temperature: {
    minWidth: 50,
    textAlign: 'right',
  },
});
