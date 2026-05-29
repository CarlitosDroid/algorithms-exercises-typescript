import { describe, it, expect } from "vitest";
import { romanToInt } from "./romanToInteger.js";

describe("romanToInt", () => {
  it("converts a single symbol I", () => {
    expect(romanToInt("I")).toBe(1);
  });

  it("converts a single symbol V", () => {
    expect(romanToInt("V")).toBe(5);
  });

  it("converts a single symbol X", () => {
    expect(romanToInt("X")).toBe(10);
  });

  it("converts a single symbol L", () => {
    expect(romanToInt("L")).toBe(50);
  });

  it("converts a single symbol C", () => {
    expect(romanToInt("C")).toBe(100);
  });

  it("converts a single symbol D", () => {
    expect(romanToInt("D")).toBe(500);
  });

  it("converts a single symbol M", () => {
    expect(romanToInt("M")).toBe(1000);
  });

  it("converts III (additive)", () => {
    expect(romanToInt("III")).toBe(3);
  });

  it("converts IV (subtractive)", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  it("converts IX (subtractive)", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  it("converts XL (subtractive)", () => {
    expect(romanToInt("XL")).toBe(40);
  });

  it("converts XC (subtractive)", () => {
    expect(romanToInt("XC")).toBe(90);
  });

  it("converts CD (subtractive)", () => {
    expect(romanToInt("CD")).toBe(400);
  });

  it("converts CM (subtractive)", () => {
    expect(romanToInt("CM")).toBe(900);
  });

  it("converts LVIII (58)", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  it("converts MCMXCIV (1994)", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  it("converts MMXXVI (2026)", () => {
    expect(romanToInt("MMXXVI")).toBe(2026);
  });

  it("converts MMMCMXCIX (3999, max value)", () => {
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
  });
});
