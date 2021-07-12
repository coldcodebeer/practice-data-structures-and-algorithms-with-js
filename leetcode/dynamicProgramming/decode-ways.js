var helper = (data, k, dp) => {
  if (k === 0) return 1 // empty string

  const startIdx = data.length - k
  if (data[startIdx] === '0') return 0 // since "6" is different from "06"

  if (dp[k] !== null) return dp[k]

  if (k >= 2 && data.slice(startIdx, startIdx + 2) <= 26) {
    dp[k] = helper(data, k - 1, dp) + helper(data, k - 2, dp)
    return dp[k]
  }

  dp[k] = helper(data, k - 1, dp)
  return dp[k]
}

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = new Array(s.length + 1).fill(null)
  return helper(s, s.length, dp)
} // O(n) time, O(n) space

/**
 * case: "1201234"
 * result: 3
 */