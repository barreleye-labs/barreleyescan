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
  extra: string;
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
export interface Transfer {
  nonce: string;
  from: string;
  to: string;
  value: number | string;
  data: string;
  blockHeight?: string;
  timestamp?: number;
  signerX?: string;
  signerY?: string;
  signatureR?: string;
  signatureS?: string;
}

export interface Tx {
  dataHash: string;
  extra: string;
  hash: string;
  height: number;
  prevBlockHash: string;
  signature: Record<r | s, string>;
  signer: string;
  timestamp: number;
  transactions: string[];
  txCount: number;
  version: number;
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

interface Pagination {
  page: number;
  size: number;
}
