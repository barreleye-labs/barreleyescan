import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url)
    .then(({ data }) => data.data)
    .catch((err) => err.response);

export { fetcher };
