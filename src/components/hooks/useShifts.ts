import { useEffect, useState } from 'react';
import { getShifts } from '../api/shifts';
import Toast from 'react-native-toast-message';
import { Shift } from '../models';
import { LocationState } from './useGeolocation';

export const useShifts = (location?: LocationState) => {
  const [shifts, setShifts] = useState<Shift[] | null>(null);
  console.log('shifts', shifts);
  useEffect(() => {
    if (location) {
      getShifts(location.coords.latitude, location.coords.longitude)
        .then(locationShifts => {
          if (locationShifts.length === 0) {
            Toast.show({
              type: 'success',
              text1: 'В твоем городе смены не найдены',
              text2: 'Вот посмотри, что есть в Москве',
            });
            return getShifts(55.751244, 37.618423);
          } else {
            return locationShifts;
          }
        })
        .then(setShifts)
        .catch(error => console.log(error));
    }
  }, [location]);

  return shifts;
};
