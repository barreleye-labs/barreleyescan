import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url)
    .then(({ data }) => data)
    .catch((err) => err);

export { fetcher };
