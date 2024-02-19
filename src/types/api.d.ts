/**
 * Block API type
 */

export interface IBlock {
  dataHash: Hash;
  hash: Hash;
  height: number;
  prevBlockHash: string;
  signature: string;
  timestamp: number;
  txResponse: {
    txCount: number;
    hashes: [];
  };
  validator: Hash;
  version: number;
}

/**
 * Transaction API type
 */

export interface ITx {
  [index: string]: string;
  nonce: string;
  from: string;
  to: string;
  value: string;
  data: string;
  signerX?: string;
  signerY?: string;
  signatureR?: string;
  signatureS?: string;
}

export interface IFaucet {
  accountAddress: string;
  balance?: number;
}
