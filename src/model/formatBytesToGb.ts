export const formatBytesToGb = (trafficBytes: number) => {
  const trafficGb = trafficBytes / 1024 / 1024 / 1024;
  return Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }).format(trafficGb);
}