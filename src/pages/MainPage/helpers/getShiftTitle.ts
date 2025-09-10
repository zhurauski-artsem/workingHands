import { Shift } from '../../../models';

export const getShiftTitle = (shift: Shift) =>
  `${shift.workTypes[0].nameOne} (${shift.companyName})`;
