const maxSubArray = (nums) => {
  let maxSum = nums[0], currentSum = maxSum

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i]
    currentSum = Math.max(currentSum + curr, curr)
    maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum
}