import { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { LocationState } from '../models';

export const useGeolocation = (): LocationState => {
  const [location, setLocation] = useState<LocationState>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      setLocation,
      () => {
        setLocation(undefined);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, []);

  return location;
};
