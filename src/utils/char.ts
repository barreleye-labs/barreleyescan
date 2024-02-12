function upperFirstString(str: string) {
  const firstChar = str.charAt(0);
  const restChar = str.slice(1);

  return firstChar.toUpperCase() + restChar;
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

function bytesToHex(bytes: number[]) {
  const hex = [];
  for (let i = 0; i < bytes.length; i++) {
    const current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
    hex.push((current >>> 4).toString(16));
    hex.push((current & 0xf).toString(16));
  }
  return hex.join('');
}

function hexToUint8Array(hex: string): Uint8Array {
  const bytes = new Uint8Array(Math.ceil(hex.length / 2));
  for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  return bytes;
}

function uint8ArrayToHex(bytes: Uint8Array): string {
  let hex = '';
  for (let i = 0; i < bytes.length; i++) {
    if (bytes[i] < 16) hex += '0';
    hex += bytes[i].toString(16);
  }
  return hex;
}

export const Char = {
  upperFirstString,
  hexToBytes,
  bytesToHex,
  hexToUint8Array,
  uint8ArrayToHex
};
