import { GeoPosition } from 'react-native-geolocation-service';

// we use null like initial state, undefiend like error
export type LocationState = GeoPosition | null | undefined;
