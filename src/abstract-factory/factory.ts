import { ProductA, ProductA1, ProductA2 } from "./product-a";
import { ProductB, ProductB1, ProductB2 } from "./product-b";

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
