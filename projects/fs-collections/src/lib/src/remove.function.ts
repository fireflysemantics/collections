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
