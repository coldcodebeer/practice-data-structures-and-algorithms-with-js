const isAnagram = (s, t) => {
  if (s.length !== t.length) return false

  const hashTable = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    hashTable[s.codePointAt(i) - 'a'.codePointAt(0)]++
    hashTable[t.codePointAt(i) - 'a'.codePointAt(0)]--
  }

  for (let i of hashTable) {
    if (i !== 0) return false
  }

  return true
}