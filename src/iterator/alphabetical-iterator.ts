/**
 * Returns an iterator that returns the provided words in alphabetical order.
 * @param words Words to sort and iterate over.
 * @param reverse Whether to sort the items in reverse (descending).
 */
export function* alphabetical(words: string[], reverse = false) {
  const sorted = [...words].sort();
  if (reverse) {
    sorted.reverse();
  }

  for (const word of sorted) {
    yield word;
  }
}
