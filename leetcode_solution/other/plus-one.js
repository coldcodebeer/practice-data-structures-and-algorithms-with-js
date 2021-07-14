/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    }

    digits[i] = 0
  }

  const newDigits = new Array(digits.length + 1).fill(0)
  newDigits[0] = 1
  return newDigits
}