/**
 * Sorts the numbers of an array in ascending order and returns a new array.
 * @param array The array to sort
 * @return A new array with the numbers sorted in ascending order
 *
 * @example
<pre>
   const original = [20, 10];
   const result = [10, 20];
   expect(sortNumbersAscending(original)).to.eql(result);
</pre>   
 */
export function sortNumbersAscending(array: number[]): number[] {
  return [...array].sort((a, b) => a - b);
}
