import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { style } from './App.style';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Weather App</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
