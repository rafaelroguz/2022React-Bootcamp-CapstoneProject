export const formatToCurrency = (number) =>
  number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
