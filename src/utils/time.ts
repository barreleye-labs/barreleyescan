import dayjs from 'dayjs';

function elapsedTime(date: number): string {
  const start: Date = new Date(date);
  const end: Date = new Date();

  const diff = (Number(end) - Number(start)) / 1000;

  const times = [
    { name: 'year', milliSeconds: 60 * 60 * 24 * 365 },
    { name: 'month', milliSeconds: 60 * 60 * 24 * 30 },
    { name: 'day', milliSeconds: 60 * 60 * 24 },
    { name: 'hours', milliSeconds: 60 * 60 },
    { name: 'mins', milliSeconds: 60 },
    { name: 'secs', milliSeconds: 1 }
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime} ${value.name} ago`;
    }
  }
  return 'now';
}

function formatUnixNano(timestamp: number): number {
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
