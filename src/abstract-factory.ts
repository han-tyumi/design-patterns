/**
 * Abstract interface which allows creation of products within a family.
 * Products of a family are able to collaborate with each other and may have
 * several variants.
 * Variants of a product are not able to collaborate with another variant.
 */
export interface Factory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}

/** Concrete factory producing products of the first variant. */
export class Factory1 implements Factory {
  createProductA() {
    return new ProductA1();
  }

  createProductB() {
    return new ProductB1();
  }
}

/** Concrete factory producing products of the second variant. */
export class Factory2 implements Factory {
  createProductA() {
    return new ProductA2();
  }

  createProductB() {
    return new ProductB2();
  }
}

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
