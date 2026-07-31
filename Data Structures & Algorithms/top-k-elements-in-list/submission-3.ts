class Solution {
  topKFrequent(nums: number[], k: number): number[] {

    // Step 1: Count frequency of each number
    const count: Record<number, number> = {};

    // Example:
    // nums = [1,1,1,2,2,3]
    //
    // count becomes:
    // {
    //   1: 3,
    //   2: 2,
    //   3: 1
    // }

    // Step 2: Create buckets
    // index = frequency
    // value = numbers with that frequency
    const freq = Array.from(
      { length: nums.length + 1 },
      () => []
    );

    // Initially:
    //
    // [
    //  [],
    //  [],
    //  [],
    //  [],
    //  [],
    //  [],
    //  []
    // ]


    // Count frequencies
    for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
    }

    console.log(count);

    // Output:
    // {
    //   1:3,
    //   2:2,
    //   3:1
    // }


    // Step 3:
    // Put each number into its frequency bucket

    for (let n in count) {
      freq[count[n]].push(parseInt(n));
    }

    console.log(freq);

    // Output:
    //
    // index -> numbers
    //
    // [
    //   [],
    //   [3],      // appears once
    //   [2],      // appears twice
    //   [1],      // appears three times
    //   [],
    //   [],
    //   []
    // ]


    // Step 4:
    // Start from highest frequency

    let res = [];

    for (let i = freq.length - 1; i > 0; i--) {

      // freq[6]
      // freq[5]
      // freq[4]
      // freq[3] -> [1]

      for (let n of freq[i]) {

        res.push(n);

        console.log(res);

        // Iteration 1:
        // [1]
        //
        // Iteration 2:
        // [1,2]

        if (res.length === k) {
          return res;
        }
      }
    }

    return [];
  }
}