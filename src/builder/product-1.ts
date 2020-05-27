/**
 * Product to be built.
 * Usually quite complex in order to make use of the builder pattern.
 */
export class Product1 {
  private parts: string[] = [];

  addPart(part: string) {
    this.parts.push(part);
  }

  toString() {
    return this.parts.join(", ");
  }
}
