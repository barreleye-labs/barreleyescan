function upperFirstString(str: string) {
  const firstChar = str.charAt(0);
  const restChar = str.slice(1);

  return firstChar.toUpperCase() + restChar;
}

export const Char = {
  upperFirstString
};
