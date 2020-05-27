import { Product1 } from "./product-1";

/** Abstract interface defining methods used to create products. */
export interface Builder {
  addPartA(): this;
  addPartB(): this;
  addPartC(): this;
}

/** Provides a specific implementation of the Builder's steps. */
export class Builder1 implements Builder {
  private product!: Product1;

  constructor() {
    this.reset();
  }

  reset() {
    this.product = new Product1();
    return this;
  }

  addPartA() {
    this.product.addPart("Part A");
    return this;
  }

  addPartB() {
    this.product.addPart("Part B");
    return this;
  }

  addPartC() {
    this.product.addPart("Part C");
    return this;
  }

  getProduct() {
    const product = this.product;
    this.reset();
    return product;
  }
}
