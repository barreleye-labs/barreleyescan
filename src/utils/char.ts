function hexToBalance(hex: string): string {
  return Number(hexToDecimal(hex)).toLocaleString('ko-KR');
}

function bytesToHex(bytes: number[]): string {
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

function numberToHex(value: number): string {
  let hex: string = value.toString(16);
  if (hex.length % 2 == 1) {
    hex = '0'.concat(hex);
  }
  return hex;
}

function remove0x(hex: string) {
  return hex.replace('0x', '');
}

function hexToDecimal(hex: string) {
  return parseInt(hex, 16).toString();
}

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

export const Char = {
  bytesToHex,
  hexToBalance,
  hexToUint8Array,
  uint8ArrayToHex,
  numberToHex,

  isAddress,
  remove0x,
  hexToDecimal
};
