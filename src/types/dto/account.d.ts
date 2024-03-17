export interface Account {
  address: string;
  balance: string;
  nonce: string;
}

export interface AccountResponse {
  account: Account;
}
