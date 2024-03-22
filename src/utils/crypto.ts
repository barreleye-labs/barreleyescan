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

function arbuf2hex(buffer: ArrayBuffer) {
  const hexCodes = [];
  const view = new DataView(buffer);
  for (let i = 0; i < view.byteLength; i += 4) {
    // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
    const value = view.getUint32(i);
    // toString(16) will give the hex representation of the number without padding
    const stringValue = value.toString(16);
    // We use concatenation and slice for padding
    const padding: string = '00000000';
    const paddedValue = (padding + stringValue).slice(-padding.length);
    hexCodes.push(paddedValue);
  }

  // Join all the hex strings into one
  return hexCodes.join('');
}

function sha256Veta(hexstr: string) {
  // We transform the string into an arraybuffer.
  const buffer = new Uint8Array(
    hexstr.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16);
    })
  );
  return crypto.subtle.digest('SHA-256', buffer).then(function (hash) {
    return arbuf2hex(hash);
  });
}

async function privateKeyToAddress(privateKey: string) {
  try {
    const { x, y } = generatePublicKey(privateKey);
    const address = (await sha256Veta(x.concat(y))).substring(0, 40);

    return address;
  } catch (error) {
    console.log(error);
  }
}

export const Crypto = {
  PublicKey,
  Signature,

  generatePrivateKey,
  generatePublicKey,
  signMessage,
  verifyMessage,
  arbuf2hex,
  sha256Veta,
  privateKeyToAddress
};
