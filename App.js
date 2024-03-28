import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
