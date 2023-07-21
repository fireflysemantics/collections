
/**
 * 
 * @param data The data.
 * @param divisor The divisor.
 * @param onMatch Whether to perform the function on match.
 * @param f The function.
 * @returns The data array with the modifications made by the function.
 */
export function modulusAction<E>(
  data: E[],
  divisor: number,
  onMatch: boolean = true,
  f: (data: E) => E
): E[] {
  data.forEach((item: E, index: number) => {
    const match: boolean = index % divisor === 0;
    if (onMatch && match) {
      f(item);
    } else if (!match) {
      f(item);
    }
  });
  return data;
}
