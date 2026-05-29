export function longestCommonPrefix(strs: string[]): string {

  let prefix = strs[0]

  for(let i = 1; i < strs.length; i++) { // O(n)
    while(!strs[i].startsWith(prefix)) { // O(m)
      prefix = prefix.slice(0, -1)
      if(prefix.length === 0) return ""
    }
  }

  return prefix

};

export function longestCommonPrefix1(strs: string[]): string {

  let idx = 0
  let completed = false

  while(idx < strs[0].length) { // O (m)
    let prefix = strs[0].charAt(idx)
    for(let i = 0; i < strs.length; i++) { // O(n)
      if (prefix !== strs[i].charAt(idx)) {
        completed = true
        break
      }
    }

    if (completed) break

    idx++
  }

  return strs[0].substring(0, idx)
};

export function longestCommonPrefix2(strs: string[]): string {

  if (strs.length === 1) return ""

  strs.sort() // O(n log n)

  let firstString = strs[0]
  let lastString = strs[strs.length - 1]
  let idx = 0

  while (idx < firstString.length && idx < lastString.length) { // O(m)
    if (firstString.charAt(idx) !== lastString.charAt(idx)) {
      break
    }
    idx++
  }

  return firstString.substring(0, idx) // O(m)

}

// Time Complexity (longestCommonPrefix2): O(n log n) = worst case (1528)
// Time Complexity: O(m * n) = worst case (200 * 200) = 40000
