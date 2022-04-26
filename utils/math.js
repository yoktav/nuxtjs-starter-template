export function randomNumberBetweenTwoNumbers(params) {
  const { max, min } = params;

  return Math.floor(Math.random() * (max - min + 1) + min);
}
