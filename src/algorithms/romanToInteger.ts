export function romanToInt(s: string): number {

  const romanMap = new Map<string, number>()
  romanMap.set("I", 1)
  romanMap.set("V", 5)
  romanMap.set("X", 10)
  romanMap.set("L", 50)
  romanMap.set("C", 100)
  romanMap.set("D", 500)
  romanMap.set("M", 1000)

  let sum = 0

  for(let i = 0; i < s.length; i++) {
    let currentNumber = romanMap.get(s.charAt(i))!
    let nextNumber = (i + 1 < s.length) ? romanMap.get(s.charAt(i + 1))! : 0

    if(currentNumber < nextNumber) {
      sum -= currentNumber
    } else {
      sum += currentNumber
    }
  }

  return sum

}

// Time complexity: O(n)
//  where n represents the length of the string,
//  we iterate as many times as there are letters in the string

// Space complexity: O(1)
//  because we use an extra data structure, but it has a fixed size of 7 entries regardless of the input
// , so it's constant space
