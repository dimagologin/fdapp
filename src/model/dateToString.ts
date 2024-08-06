//     "valid_from": "0001-01-01T00:00:00Z",
export const dateToString = (date: Date) => {
  return date.toISOString().slice(0, 19).replace('T', ' ');
};
