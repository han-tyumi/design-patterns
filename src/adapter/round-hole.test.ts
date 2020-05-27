import { RoundHole } from "./round-hole";
import { RoundPeg } from "./round-peg";

test("fits small enough pegs", () => {
  const roundHole = new RoundHole(5);
  const roundPeg = new RoundPeg(5);
  expect(roundHole.fits(roundPeg)).toBe(true);
});

test("doesn't fit large pegs", () => {
  const roundHole = new RoundHole(5);
  const roundPeg = new RoundPeg(6);
  expect(roundHole.fits(roundPeg)).toBe(false);
});
