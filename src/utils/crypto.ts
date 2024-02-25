import { ec as EC } from 'elliptic';
import sha256 from 'sha256';

const ec = new EC('secp256k1');

class PublicKey {
  constructor(
    public x: string,
    public y: string
  ) {}
}

class Signature {
  constructor(
    public r: string,
    public s: string,
    public recoveryParam: number
  ) {}
}

const generatePrivateKey = (): string => {
  return ec.genKeyPair().getPrivate().toString();
};

const generatePublicKey = (privateKey: string): PublicKey => {
  const publicKey = ec.keyFromPrivate(privateKey).getPublic();
  return new PublicKey(publicKey.getX().toString('hex'), publicKey.getY().toString('hex'));
};

const signMessage = (message: string, privateKey: string): Signature => {
  message = sha256(message).toString();
  const key = ec.keyFromPrivate(privateKey);
  const signature: Signature = JSON.parse(JSON.stringify(key.sign(message)));
  return new Signature(signature.r, signature.s, signature.recoveryParam);
};

const verifyMessage = (message: string, publicKey: PublicKey, signature: Signature): boolean => {
  message = sha256(message).toString();
  const key = ec.keyFromPublic(publicKey, 'hex');
  return key.verify(message, signature);
};

function isAddress(address: string) {
  if (address.indexOf('0x') === 0) {
    address = address.replace('0x', '');
  }

  if (address.length !== 40) {
    return false;
  }

  const regexp: RegExp = /^[0-9a-fA-F]+$/;

  if (regexp.test(address)) {
    return true;
  }
  return false;
}

function remove0x(hex: string) {
  return hex.replace('0x', '');
}

function hexToDecimal(hex: string) {
  return parseInt(hex, 16).toString();
}

export const Crypto = {
  isAddress,
  remove0x,
  hexToDecimal,
  generatePrivateKey,
  generatePublicKey,
  signMessage,
  verifyMessage,
  PublicKey,
  Signature
};
