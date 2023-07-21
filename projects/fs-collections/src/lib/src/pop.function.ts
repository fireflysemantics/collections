/**
 * Removes the last element
 * @param original The original array
 * @return A new array with the last element removed
 *
 * @example
   <pre>
   const original = ["a", "b"];
   const result = ["a"];
   expect(remove(original, 1)).to.eql(result);
   </pre>
 */
export function pop<T>(array: T[]): T[] {
  return array.slice(0, -1);
}
