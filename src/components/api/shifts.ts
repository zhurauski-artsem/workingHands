import { BaseResponse, Shift } from '../models';

export const getShifts = (latitude: number, longitude: number) =>
  fetch(
    `https://mobile.handswork.pro/api/shifts/map-list-unauthorized?latitude=${latitude}&longitude=${longitude}`,
  )
    .then<BaseResponse<Shift[]>>(response => response.json())
    .then(({ data }) => data);
