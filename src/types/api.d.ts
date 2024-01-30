/**
 * block type
 * @description 도메인별 타입 분리 고민중
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
