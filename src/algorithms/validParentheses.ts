export function isValid(s: string): boolean {

  if (s.length === 1) return false

  const stack: string[] = []

  for(let i = 0; i < s.length; i++) {

    let currChart = s.charAt(i)

    if (currChart === "(" || currChart === "[" || currChart === "{")
      stack.push(currChart)

    if (currChart === ")" && stack.pop() !== "(") {
      return false
    }

    if (currChart === "]" && stack.pop() !== "[") {
      return false
    }

    if (currChart === "}" && stack.pop() !== "{") {
      return false
    }

  }

  return stack.length === 0

};

// Time complexity: O(n)
// Space complexity: O(n)
