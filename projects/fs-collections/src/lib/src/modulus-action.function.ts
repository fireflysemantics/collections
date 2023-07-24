
/**
 * 
 * @param data The data.
 * @param divisor The divisor.
 * @param onMatch Whether to perform the function on match.
 * @param f The function.
 * @param remainder The remainder that triggers the match, defaults to zero.
 * @returns The data array with the modifications made by the function.
 */
export function modulusAction<E>(
  data: E[],
  divisor: number,
  onMatch: boolean = true,
  f: (data: E) => E,
  remainder: number = 0
): E[] {
  data.forEach((item: E, index: number) => {
    const match: boolean = index % divisor === remainder;
    if (onMatch && match) {
      f(item);
    } else if (!match) {
      f(item);
    }
  });
  return data;
}
