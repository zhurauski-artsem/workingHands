import React from 'react';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useShifts } from '../../hooks/useShifts';
import { ActivityIndicator, Button, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../models';
import { SafeAreaViewWrapper } from '../../components/SafeAreaViewWrapper';
import { getShiftTitle } from './helpers/getShiftTitle';

type MainPageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const MainPage: React.FC<MainPageProps> = ({ navigation }) => {
  const location = useGeolocation();
  const shifts = useShifts(location);

  const showError = location === undefined;
  const showLoader = shifts === null && !showError;

  return (
    <SafeAreaViewWrapper>
      {shifts && (
        <>
          <Text style={styles.title}>Доступные смены:</Text>
          <FlatList
            data={shifts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Button
                onPress={() =>
                  navigation.navigate('ShiftDetails', { shift: item })
                }
                title={getShiftTitle(item)}
              />
            )}
          />
        </>
      )}
      {showLoader && <ActivityIndicator />}
      {showError && (
        <Text style={styles.centeredText}>
          К сожалению, не удалось получить текущую геопозицию
        </Text>
      )}
    </SafeAreaViewWrapper>
  );
};
