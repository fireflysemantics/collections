/**
 * Places the elements in the array argument first in the original array
 * and returns a new array.
 *
 * @param original  The original array
 * @param elements The array to concatenate
 * @return A new array with elementN array inserted at the beginning of the original array.
 *
 * @example
<pre>
   const original = ["a", "b"];
   const result = ["a", "b", "c", "d"];
   expect(concat(original, ["c", "d"])).to.eql(result);
</pre>
 */
export function pre<T>(original: T[], elements: T[]): T[] {
  return [...elements, ...original];
}
