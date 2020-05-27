import { alphabetical } from "./alphabetical-iterator";

/** Custom class implementing a default and custom iterator. */
export class Words {
  private words: string[] = [];

  constructor(...words: string[]) {
    this.addWords(...words);
  }

  addWords(...words: string[]) {
    const splitWords = words.flatMap((w) => w.split(" "));
    this.words.push(...splitWords);
  }

  getWords() {
    return [...this.words];
  }

  toString() {
    return this.words.join(" ");
  }

  alphabetical(reverse = false) {
    return alphabetical(this.words, reverse);
  }

  *[Symbol.iterator]() {
    for (const word of this.words) {
      yield word;
    }
  }
}
