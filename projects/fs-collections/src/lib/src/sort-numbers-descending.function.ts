/**
 * Sorts the numbers of an array in descending order and returns a new array.
 * @param array The array to sort
 * @return A new array with the numbers sorted in descending order
 *
 * @example
<pre>
   const original = [10, 20];
   const result = [20, 10];
   expect(sortNumbersDescending(original)).to.eql(result);
</pre>	
 */
export function sortNumbersDescending(array: number[]): number[] {
  return [...array].sort((a, b) => b - a);
}
