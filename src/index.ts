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

/**
 * Concanates the elements in the array argument onto the original array.
 *
 * @param original  The original array
 * @param elements The array to concatenate
 * @return A new array with elementN array concatenated onto the original array.
 *
 * @example
   <pre>
   const original = ["a", "b"];
   const result = ["a", "b", "c", "d"];
   expect(concat(original, ["c", "d"])).to.eql(result);
   </pre>
 */
export function post<T>(original: T[], elements: T[]): T[] {
  return [...original, ...elements];
}

/**
 * Removes an element from an array by its index in the array.
 * @param original The original array
 * @param index The index of the item to remove
 * @return The new array resulting from the removal of the index item
 *
 * @example
 * const original = ['a', 'b'];
 * const result = remove(original, 1);
 * console.log(result);
 * ['a']
 */
export function remove<T>(array: T[], index: number): T[] {
  return index >= 0
    ? [...array.slice(0, index), ...array.slice(index + 1)]
    : [...array];
}

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

/**
 * For each instance of type `E` in the array argument
 * map the property values into arrays keyed by the name of the 
 * property in the instance of type `E`.
 * @param entities The array of entities
 * @return A single object with all the property values on the entities mapped into arrays.
 *
 * 
 * @example
```
students:Student[] = [
    {id:1, name:'1', sex:'X', standard: 1, propName: 11, anotherSillyPropName:111,},
    {id:2, name:'2', sex:'Y', standard: 2, propName: 22, anotherSillyPropName:222,},
    {id:3, name:'3', sex:'Z', standard: 3, propName: 33, anotherSillyPropName:333,},
]

console.log(toArrayByObjectKey(students))
```
* 
* CREDIT:
* Implementation provided by Georg per this SO answer:
* https://stackoverflow.com/questions/55404204/attempting-to-understand-reduce-functions-for-object-mapping
*/
export function toArrayByObjectKey<E>(entities:E[]) {

    let res:any = {};

    for (let obj of entities)
        for (let [k, v] of Object.entries(obj))
            res[k] = (res[k] || []).concat(v)

    return res;
};