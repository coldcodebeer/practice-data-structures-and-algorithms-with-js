const reverseString2 = (s) => {
  let i = 0
  let j = s.length - 1
  const newStr = s

  while (i < j) {
    const tmp = s[i]
    s[i++] = s[j]
    s[j--] = tmp

    // [newStr[i], newStr[j]] = [newStr[j], newStr[i]]
    // j--
    // i++
  }
}