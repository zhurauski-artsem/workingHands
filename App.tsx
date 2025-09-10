import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainPage } from './src/pages/MainPage/MainPage';
import { RootStackParamList } from './src/models';
import { ShiftDetails } from './src/pages/ShiftDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Toast />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainPage}
            options={{ headerShown: false, headerBackTitle: 'Назад' }}
          />
          <Stack.Screen
            name="ShiftDetails"
            component={ShiftDetails}
            options={({ route }) => ({
              headerBackTitle: 'Назад',
              headerTitle: route.params.shift.companyName ?? 'Описание смены',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
