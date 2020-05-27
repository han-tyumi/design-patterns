import { RoundHole } from "./round-hole";
import { SquarePeg } from "./square-peg";
import { SquarePegAdapter } from "./square-peg-adapter";

test("can adapt square pegs", () => {
  const roundHole = new RoundHole(5);
  const squarePeg = new SquarePeg(4);
  const adaptedSquarePeg = new SquarePegAdapter(squarePeg);
  expect(roundHole.fits(adaptedSquarePeg)).toBe(true);
});
