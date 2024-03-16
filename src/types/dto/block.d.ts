import { Signature } from '@type/dto/signature';

export interface Block {
  hash: Hash;
  dataHash: Hash;
  prevBlockHash: Hash;
  version: number;
  height: number;
  timestamp: number;
  signer: string;
  extra: string;
  signature: Signature;
  txCount: number;
  transactions: string[];
}

export interface BlockResponse {
  block: Block;
}

export interface BlocksResponse {
  blocks: Block[];
  totalCount: number;
}
