import { useEffect, useState } from 'react';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';

// we use null like initial state, undefiend like error
export type LocationState = GeoPosition | null | undefined;

export const useGeolocation = (): LocationState => {
  const [location, setLocation] = useState<LocationState>(null);

  useEffect(() => {
    console.log('111111');
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
