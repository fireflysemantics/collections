/**
 * Adds one or more elements to the beginning of the array.
 *
 * @param array The array to add the elements to
 * @param  elementN The element(s) to add to the beginning of the array
 * @return The new array with the elements added to the beginning of it.
 *
 * @example
<pre> 
   const original = ["a", "b"];
   const result = ["c", "d", "a", "b"];
   expect(pull(original, "c", "d")).to.eql(result);
</pre>   
 */
export function pull<T>(array: T[], ...elementN: T[]): T[] {
  return [...elementN, ...array];
}
