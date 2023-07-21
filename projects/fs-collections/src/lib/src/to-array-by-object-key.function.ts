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
export function toArrayByObjectKey<E extends object>(entities:E[]) {

    let res:any = {};

    for (let obj of entities)
        for (let [k, v] of Object.entries(obj))
            res[k] = (res[k] || []).concat(v)

    return res;
};