import { describe, it, expect } from "vitest";
import { isPalindrome } from "./palindromeNumber.js";

describe("isPalindrome", () => {
  it("returns true for a single digit number", () => {
    expect(isPalindrome(7)).toBe(true);
  });

  it("returns true for a palindrome number", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it("returns true for a longer palindrome number", () => {
    expect(isPalindrome(1221)).toBe(true);
  });

  it("returns false for a non-palindrome number", () => {
    expect(isPalindrome(123)).toBe(false);
  });

  it("returns false for a negative number", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it("returns false for a number ending in zero (except 0 itself)", () => {
    expect(isPalindrome(10)).toBe(false);
  });

  it("returns true for zero", () => {
    expect(isPalindrome(0)).toBe(true);
  });
});
