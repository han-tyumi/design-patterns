import { ProductA } from "./product-a";

/** Abstract product B interface inherited by all of its variants. */
export interface ProductB {
  toString(): string;
  withProductA(productA: ProductA): string;
}

/** First concrete variant of product B. */
export class ProductB1 implements ProductB {
  toString() {
    return "Product B1";
  }

  withProductA(productA: ProductA) {
    return `${this.toString()} & ${productA.toString()}`;
  }
}

/** Second concrete variant of product B. */
export class ProductB2 implements ProductB {
  toString() {
    return "Product B2";
  }

  withProductA(productA: ProductA) {
    return `${productA.toString()} & ${this.toString()}`;
  }
}
