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
