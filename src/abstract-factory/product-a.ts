/** Abstract product A interface inherited by all of its variants. */
export interface ProductA {
  toString(): string;
}

/** First concrete variant of product A. */
export class ProductA1 implements ProductA {
  toString() {
    return "Product A1";
  }
}

/** Second concrete variant of product A. */
export class ProductA2 implements ProductA {
  toString() {
    return "Product A2";
  }
}
