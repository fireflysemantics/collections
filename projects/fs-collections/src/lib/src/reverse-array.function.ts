/**
 * Reverses an array and returns a new array.
 * @param array The array to reverse
 * @return A new array that is the reverse of the argument
 *
 * @example
<pre>
   const original = [20, 10];
   const result = [10, 20];
   expect(reverse(original)).to.eql(result);
</pre>
*/
export function reverse<T>(array: T[]): T[] {
  return [...array].reverse();
}
