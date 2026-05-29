export function twoSum(nums: number[], target: number): number[] {
  const seenMap = new Map<number, number>() // O(n) space complexity

  for(let i = 0; i < nums.length; i++) { // O(n) time complexity
    let complement = target - nums[i]
    if (seenMap.has(complement)) {
      return [seenMap.get(complement)!, i]
    }
    seenMap.set(nums[i], i)
  }

  return []
}
