import { describe, it, expect } from "vitest";
import { isValid } from "./validParentheses.js";

describe("isValid", () => {
  it("returns true for '()'", () => {
    expect(isValid("()")).toBe(true);
  });

  it("returns true for '()[]{}'", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  it("returns true for '{[]}'", () => {
    expect(isValid("{[]}")).toBe(true);
  });

  it("returns true for '([{}])'", () => {
    expect(isValid("([{}])")).toBe(true);
  });

  it("returns false for '(]'", () => {
    expect(isValid("(]")).toBe(false);
  });

  it("returns false for '([)]'", () => {
    expect(isValid("([)]")).toBe(false);
  });

  it("returns false for '{'", () => {
    expect(isValid("{")).toBe(false);
  });

  it("returns false for single character '('", () => {
    expect(isValid("(")).toBe(false);
  });

  it("returns false for ']'", () => {
    expect(isValid("]")).toBe(false);
  });

  it("returns true for empty string", () => {
    expect(isValid("")).toBe(true);
  });

  it("returns false for '((('", () => {
    expect(isValid("(((")).toBe(false);
  });

  it("returns false for ')))'", () => {
    expect(isValid(")))")).toBe(false);
  });

  it("returns true for '{{[[(())]]}}'", () => {
    expect(isValid("{{[[(())]]}}", )).toBe(true);
  });
});
