export function randomKey() {
  // To get a unique number Math.random should be used,
  // Then convert it to base 16 (numbers + letters),
  // And grab the characters after the decimal
  const key = Math.random().toString(16).slice(2);

  return key;
}
