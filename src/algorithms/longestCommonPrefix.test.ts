import { describe, it, expect } from "vitest";
import { longestCommonPrefix } from "./longestCommonPrefix.js";

describe("longestCommonPrefix", () => {
  it("returns common prefix for classic case", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  it("returns empty string when there is no common prefix", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  it("returns empty string when words start with different letters", () => {
    expect(longestCommonPrefix(["banana", "apple", "cherry"])).toBe("");
  });

  it("returns full word when all strings are identical", () => {
    expect(longestCommonPrefix(["test", "test", "test"])).toBe("test");
  });

  it("returns prefix when one word is a prefix of others", () => {
    expect(longestCommonPrefix(["interview", "inter", "internal"])).toBe("inter");
  });

  it("returns single character prefix", () => {
    expect(longestCommonPrefix(["abc", "abd", "abz"])).toBe("ab");
  });

  it("returns empty string for two-element array with no common prefix", () => {
    expect(longestCommonPrefix(["apple", "mango"])).toBe("");
  });

  it("returns common prefix for two-element array", () => {
    expect(longestCommonPrefix(["apple", "application"])).toBe("appl");
  });

  it("returns common prefix for two-element array1", () => {
    expect(longestCommonPrefix(["abc", "abcd"])).toBe("abc");
  });
});
