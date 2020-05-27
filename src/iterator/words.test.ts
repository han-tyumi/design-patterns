import { Words } from "./words";

test("should add words", () => {
  const words = new Words("hello");
  words.addWords(", world!", "woo!");
  expect(words.getWords()).toEqual(["hello", ",", "world!", "woo!"]);
});

test("should iterate words", () => {
  const words = new Words();
  words.addWords("hello world again! just love you so much!");

  let result = "";
  for (const word of words) {
    result += word;
  }

  expect(result).toBe("helloworldagain!justloveyousomuch!");
});

test("should provide an alphabetical iterator", () => {
  const words = new Words("hello world!!!", "ahh!");

  let result = "";
  for (const word of words.alphabetical(true)) {
    result += word;
  }

  expect(result).toBe("world!!!helloahh!");
});
