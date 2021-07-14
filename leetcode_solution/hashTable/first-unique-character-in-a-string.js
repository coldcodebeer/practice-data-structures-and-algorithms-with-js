const firstUniqChar = (s) => {
  const hashMap = new Map

  for (let i = 0; i < s.length; i++) {
    if (!hashMap.has(s[i])) {
      hashMap.set(s[i], i)
    } else {
      hashMap.set(s[i], -1)
    }
  }

  let minIndex = Infinity

  for (let index of hashMap.values()) {
    if (index > -1 && index < minIndex) minIndex = index
  }

  return minIndex === Infinity ? -1 : minIndex
}