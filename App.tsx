/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaViewWrapper } from './src/components/SafeAreaViewWrapper';
import { styles } from './styles';
import Toast from 'react-native-toast-message';
import { useGeolocation } from './src/components/hooks/useGeolocation';
import { useShifts } from './src/components/hooks/useShifts';

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
  const location = useGeolocation();
  const shifts = useShifts(location);

  const showError = location === undefined;
  const showLoader = shifts === null && !showError;

  return (
    <SafeAreaViewWrapper>
      {shifts && (
        <ScrollView style={styles.container}>
          <FlatList
            data={shifts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Text style={styles.centeredText}>{item.companyName}</Text>
            )}
          />
        </ScrollView>
      )}
      {showLoader && <ActivityIndicator />}
      {showError && (
        <Text style={styles.centeredText}>
          К сожалению, не удалось получить текущую геопозицию
        </Text>
      )}
      <Toast />
    </SafeAreaViewWrapper>
  );
}

export default App;
