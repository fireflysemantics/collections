/**
 * Sorts the string elements of an array in descending order.
 *
 * @example
 <pre>
    let original = ["Alpha", "Beta"];
    let result = ["Beta", "Alpha"];
	expect(sortStringsDescending(original)).to.eql(result);
 </pre>
 */
 export function sortStringsDescending(array: string[]): string[] {
    return [...array].sort((a, b) => {
      if (a.toLowerCase() !== b.toLowerCase()) {
        a = a.toLowerCase();
        b = b.toLowerCase();
      }
      return a < b ? 1 : a > b ? -1 : 0;
    });
  }