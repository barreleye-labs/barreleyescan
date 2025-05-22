export interface NodeConfig {
  KEY: string;
  API: string;
  P2P_END_POINT: string;
  ADDRESS: string;
  email?: string;
  github?: string;
  linkedIn?: string;
}

export const barreleyeConfig: NodeConfig = {
  KEY: 'barreleye',
  ADDRESS: 'f4bcd665c2595fb3253ade200bb80d7e5ddd9ca2',
  API: 'https://barrelleye.com',
  P2P_END_POINT: 'https://barrelleye.com:4100',
  github: 'https://github.com/barreleye-labs'
};

export const nayoungConfig: NodeConfig = {
  KEY: 'nayoung',
  API: 'https://barrelleye.com:8001',
  ADDRESS: '1e4f5ff2f09df766411402b52e146fb666abdc44',
  P2P_END_POINT: 'https://barrelleye.com:4101',
  email: 'usiyoung7@gmail.com',
  github: 'https://github.com/usiyoung'
};

export const youngminConfig: NodeConfig = {
  KEY: 'youngmin',
  API: 'https://barrelleye.com:8002',
  ADDRESS: '16645fd53030389ea5252f7755b7fce54d0aa644',
  P2P_END_POINT: 'https://barrelleye.com:4102',
  email: 'k930503@gmail.com',
  github: 'https://github.com/k930503',
  linkedIn: 'https://www.linkedin.com/in/youngmin-kim-236574216/'
};


export default { barreleyeConfig, youngminConfig, nayoungConfig };
