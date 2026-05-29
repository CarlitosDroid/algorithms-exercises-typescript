import { describe, it, expect } from "vitest";
import { helloWorld } from "./helloWorld.js";

describe("helloWorld", () => {
    it("returns greeting with name", () => {
        expect(helloWorld("CarlitosDroid")).toBe("Hello world CarlitosDroid");
    });
});
