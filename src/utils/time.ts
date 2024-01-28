import dayjs from 'dayjs';

function elapsedTime(date: number) {
  const start = new Date(date);
  const end = new Date();

  const diff = (end - start) / 1000;

  const times = [
    { name: 'year', milliSeconds: 60 * 60 * 24 * 365 },
    { name: 'month', milliSeconds: 60 * 60 * 24 * 30 },
    { name: 'day', milliSeconds: 60 * 60 * 24 },
    { name: 'hours', milliSeconds: 60 * 60 },
    { name: 'min', milliSeconds: 60 }
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime} ${value.name} ago`;
    }
  }
  return 'now';
}

function formatUnixNano(timestamp: number) {
  return timestamp / 1000000;
}

function formatUtc(timestamp: number) {
  return dayjs(timestamp).utc().format('MMM D,YYYY HH:mm:ss');
}
export const Time = {
  elapsedTime,
  formatUnixNano,
  formatUtc
};
