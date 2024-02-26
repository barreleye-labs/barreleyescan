function ellipsis(hash: string) {
  const a = hash.substring(0, 6);
  const b = hash.slice(-6, hash.length);

  return `${a}...${b}`;
}

export const Hash = { ellipsis };
