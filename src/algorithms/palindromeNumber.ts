export function isPalindrome(x: number): boolean {

  if (x < 0) return false
  if (x % 10 === 0 && x !== 0) return false

  let reverted = 0
  let reduced = x

  while (reduced !== 0) {
    let remainder = reduced % 10
    reverted = (reverted * 10) + remainder
    reduced = Math.floor(reduced / 10)
  }

  return x === reverted
}

// Time complexity: O(log n)
//  because the loop divides the number by 10 on each iteration,
//  so it runs as many times as there are digits in n, which is log10 n


// Space complexity: O(1)
//  because we only use scalar variables - no data structures that grow with the input
