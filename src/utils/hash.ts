function ellipsis(hash: string) {
  const a = hash.substring(0, 6);
  const b = hash.substring(-6, 6);

  return `${a}...${b}`;
}

export const Hash = { ellipsis };
