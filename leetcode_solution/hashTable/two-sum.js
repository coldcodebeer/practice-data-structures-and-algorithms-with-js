function getAllTwoSumResult(nums, target) {
  const hashMap = new Map, result = []

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(target - nums[i])) result.push([target - nums[i], nums[i]])
    hashMap.set(nums[i], i)
  }

  return result
}

console.log(getAllTwoSumResult([2, 11, 16, -6, 8, 4, 3, -1], 10))