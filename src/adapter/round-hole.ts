import { RoundPeg } from "./round-peg";

/** A class which only supports round pegs. */
export class RoundHole {
  constructor(readonly radius: number) {}

  fits(peg: RoundPeg) {
    return peg.radius <= this.radius;
  }
}
