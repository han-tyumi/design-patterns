import { RoundPeg } from "./round-peg";
import { SquarePeg } from "./square-peg";

/** Adapts square pegs so that they can be used in round holes. */
export class SquarePegAdapter extends RoundPeg {
  constructor(peg: SquarePeg) {
    super(peg.width * (Math.SQRT2 / 2));
  }
}
