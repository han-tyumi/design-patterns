import { alphabetical } from "./alphabetical-iterator";

test("iterate alphabetically", () => {
  const words = alphabetical(["apple", "orange", "banana", "kiwi", "cherry"]);

  let result = [];
  for (const word of words) {
    result.push(word);
  }

  expect(result).toEqual(["apple", "banana", "cherry", "kiwi", "orange"]);
});

test("iterate alphabetically in reverse", () => {
  const words = alphabetical(
    ["apple", "orange", "banana", "blueberry", "cherry"],
    true
  );

  let result = [];
  for (const word of words) {
    result.push(word);
  }

  expect(result).toEqual(["orange", "cherry", "blueberry", "banana", "apple"]);
});
