import axios from 'axios';

import { service } from '@src/utils/http';

const fetcher = (url: string) => axios.get(url).then(({ data }) => data.data);
// const fetcher = (url: string) => {
//   return service.get(url);
// };

export { fetcher };
