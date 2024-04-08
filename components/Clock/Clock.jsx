import { Text, View } from 'react-native';
import Txt from '../Txt/Txt';
import { style } from './Clock.style';
import { nowToHHMM } from '../../utils/dateTime';
import { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);
  return (
    <View style={style.clockContainer}>
      <Txt anotherStyle={style.clockText}>{time}</Txt>
    </View>
  );
};

export default Clock;
