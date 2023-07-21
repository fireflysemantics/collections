/**
 * Deep clones an array of instances of type T and returns a new array.
 * @param array The array to deep clone
 * @return A new deep clone of the array argument
 *
 * Note that all the instances being cloned must implement this type of 
 * constructor:
 * <pre>
 * constructor(obj: any) {
 * Object.assign(this, obj);
 * </pre>
 * 
 * @example
<pre>
  const original = [new Todo(), new Todo()];
  const result = [new Todo(), new Todo()];
  expect(deepClone(original)).to.eql(result);
</pre>
*/
export function deepClone(array: any[]): any[] {
  return array.map((e: any) => new e.constructor(e));
}
