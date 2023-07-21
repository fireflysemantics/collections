/**
 * Sorts the string elements of an array in ascending order.
 *
 * @example
<pre>
   let original = ["Beta", "Alpha"];
   let result = ["Alpha", "Beta"];
   expect(sortStringsAscending(original)).to.eql(result);
</pre>
 */
export function sortStringsAscending(array: string[]): string[] {
  return [...array].sort();
}
