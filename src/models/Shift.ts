import { Coordinates } from './Coordinates';
import { WorkType } from './WorkType';

export type Shift = {
  id: string;
  logo: string;
  address: string;
  companyName: string;
  planWorkers: number;
  priceWorker: number;
  timeEndByCity: string;
  workTypes: WorkType[];
  currentWorkers: number;
  customerRating: number;
  dateStartByCity: string;
  timeStartByCity: string;
  bonusPriceWorker: number;
  coordinates: Coordinates;
  isPromotionEnabled: false;
  customerFeedbacksCount: string;
};
