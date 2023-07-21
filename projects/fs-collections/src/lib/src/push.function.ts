/**
 * Pushes the elements onto the end of the array 
 * and returns a new array.
 *
 * @param original  The original array
 * @param elementN The arguments to be inserted
 * @return The result array
 *
   @example
<pre>
   const original = ['a', 'b'];
   const result = ['a', 'b', 'c', 'd'];          
   expect(push(original, 'c', 'd')).to.eql(result);
</pre>
 */
export function push<T>(original: T[], ...elementN: T[]): T[] {
  return [...original, ...elementN];
}
