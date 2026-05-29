import { describe, it, expect } from "vitest";
import { twoSum } from "./twoSum.js";

describe("twoSum", () => {
  it("returns indices of the two numbers that add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("works when the pair is not at the start", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("works with duplicate values", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("returns empty array when no solution exists", () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });
});
