/**
 * Block API type
 */

export interface IBlock {
  block: Block;
}
export interface IBlocks {
  blocks: Block[];
  totalCount: number;
}

export interface Block {
  dataHash: Hash;
  hash: Hash;
  height: number;
  prevBlockHash: string;
  signature: { r: string; s: string };
  signer: string;
  timestamp: number;
  transactions: [];
  txCount: number;
  version: number;
}

/**
 * Transaction API type
 */

export interface ITxs {
  transactions: Tx[];
  totalCount: number;
}

export interface ITx {
  transaction: Tx;
}
export interface Tx {
  [index: string]: string;
  nonce: string;
  from: string;
  to: string;
  value: string;
  data: string;
  blockHeight: number;
  timestamp: number;
  signerX?: string;
  signerY?: string;
  signatureR?: string;
  signatureS?: string;
}

export interface IFaucet {
  accountAddress: string;
  balance?: number;
}

export interface IAccount {
  account: Account;
}
export interface Account {
  address: string;
  balance: string;
  nonce: string;
}
