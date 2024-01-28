import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(({ data }) => data);

export default fetcher;