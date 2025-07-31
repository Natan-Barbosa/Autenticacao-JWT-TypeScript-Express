import { describe, expect, test } from "@jest/globals";

const hello = () => {
  return "Hello World";
};

describe("String Service", () => {
  test("Has to Be Hello", () => {
    expect(hello()).toBe("Hello World");
  });
});
