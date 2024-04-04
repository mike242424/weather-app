import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  clock: {
    alignItems: 'flex-end',
  },
  city: {},
  interpretation: {
    alignSelf: 'flex-end',
    transform: [{ rotate: '-90deg' }],
  },
  interpretationText: {
    fontSize: 20,
  },
  temperatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  temperature: {
    fontSize: 125,
  },
  img: { height: 50, width: 50, backgroundColor: '#fff' },
});
