import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

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
