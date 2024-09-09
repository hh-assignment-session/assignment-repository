import { describe, expect, test } from "vitest";
import helloWorld from "../helloWorld.ts";

describe("인사하기", () => {
  test('should return "Hello, World!"', () => {
    const result = helloWorld();
    expect(result).toBe("Hello, World!");
  });
});
