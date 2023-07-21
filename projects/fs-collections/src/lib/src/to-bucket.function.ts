import { BucketValue } from "./models/bucket-value.interface";

/**
 * @param data The data
 * @param buckets The buckets
 * @param consecutive The number of times to assign a bucket to consecutive data items.
 * @returns The array of BucketValue instances.
 */
export function toBuckets(
    data: any[],
    buckets: any[],
    consecutive: number
  ): BucketValue[] {
    const bucketValues: BucketValue[] = [];
  
    //========================================
    // Initial Parameters
    //========================================
    let iteration = 0;
    let bucketIndex: number = 0;
    let remainingDataItems = data.length;
  
    if (remainingDataItems && buckets.length && consecutive > 0) {
      //========================================
      // Decrement the remaining items as we are
      // going along.
      //========================================
      while (remainingDataItems >= consecutive) {
        for (let i = 0; i < consecutive; i++) {
          //========================================
          // Create a BucketValue instance
          // and add it to the return array
          //========================================
          let value: any = data[iteration];
          let bucket: any = buckets[bucketIndex];
          let bucketValue: BucketValue = {
            value,
            bucket,
          };
          bucketValues.push(bucketValue);
          remainingDataItems--;
          iteration++;
        }
        //========================================
        // Reset the bucket index if
        // we've reached the last bucket.
        //========================================
        if (bucketIndex < buckets.length - 1) {
          bucketIndex++;
        } else {
          bucketIndex = 0;
        }
      }
      //========================================
      // Process any remaining data items
      //========================================
      while (remainingDataItems) {
        for (let i = 0; i < remainingDataItems; i++) {
          let value: any = data[iteration];
          let bucket: any = buckets[bucketIndex];
          let bucketValue: BucketValue = {
            value,
            bucket,
          };
          bucketValues.push(bucketValue);
          remainingDataItems--;
          iteration++;
        }
      }
    }
    return bucketValues;
  }