/**
 * Concanates the elements in the array argument onto the original array.
 *
 * @param original  The original array
 * @param elements The array to concatenate
 * @return A new array with elementN array concatenated onto the original array.
 *
 * @example
   <pre>
   const original = ["a", "b"];
   const result = ["a", "b", "c", "d"];
   expect(concat(original, ["c", "d"])).to.eql(result);
   </pre>
 */
export function post<T>(original: T[], elements: T[]): T[] {
  return [...original, ...elements];
}
