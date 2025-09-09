/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  ActivityIndicator,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Geolocation from 'react-native-geolocation-service';
import { useEffect, useState } from 'react';
import { LocationState } from './types';
import { SafeAreaViewWrapper } from './src/components/SafeAreaViewWrapper';
import { styles } from './styles';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [location, setLocation] = useState<LocationState>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(setLocation, error => {
      console.log(error.code, error.message);
      setLocation(undefined);
    });
  }, []);

  return (
    <SafeAreaViewWrapper>
      {location && (
        <Text style={styles.centeredText}>{JSON.stringify(location)}</Text>
      )}
      {location === null && <ActivityIndicator />}
      {location === undefined && (
        <Text style={styles.centeredText}>
          К сожалению, не удалось получить текущую геопозицию
        </Text>
      )}
    </SafeAreaViewWrapper>
  );
}

export default App;
