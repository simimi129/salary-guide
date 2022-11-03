export function calcAvg(forValue, data) {
  let sum = 0;
  for (const item of data) {
    sum += item[forValue];
  }
  return (sum / data.length).toFixed(0);
}
