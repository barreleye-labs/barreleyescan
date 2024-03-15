export interface NodeConfig {
  KEY: string;
  API: string;
  P2P_END_POINT: string;
  email?: string;
  github?: string;
}

export const barreleyeConfig: NodeConfig = {
  KEY: 'barreleye',
  API: 'https://barreleyescan.com:9000',
  P2P_END_POINT: 'https://barreleyescan.com:4100',
  github: 'https://github.com/barreleye-labs'
};

export const youngminConfig: NodeConfig = {
  KEY: 'youngmin',
  API: 'https://barreleyescan.com:9002',
  P2P_END_POINT: 'https://barreleyescan.com:4002',
  email: 'k930503@gmail.com',
  github: 'https://github.com/k930503'
};

export const nayoungConfig: NodeConfig = {
  KEY: 'nayoung',
  API: 'https://barreleyescan.com:9001',
  P2P_END_POINT: 'https://barreleyescan.com:4001',
  email: 'usiyoung7@gmail.com',
  github: 'https://github.com/usiyoung'
};
