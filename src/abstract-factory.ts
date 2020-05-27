export interface ProductA {
  toString(): string;
}

export class ProductA1 implements ProductA {
  toString() {
    return "Product A1";
  }
}

export class ProductA2 implements ProductA {
  toString() {
    return "Product A2";
  }
}

export interface ProductB {
  toString(): string;
  withProductA(productA: ProductA): string;
}

export class ProductB1 implements ProductB {
  toString() {
    return "Product B1";
  }

  withProductA(productA: ProductA) {
    return `${this.toString()} & ${productA.toString()}`;
  }
}

export class ProductB2 implements ProductB {
  toString() {
    return "Product B2";
  }

  withProductA(productA: ProductA) {
    return `${productA.toString()} & ${this.toString()}`;
  }
}

export interface Factory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}

export class Factory1 implements Factory {
  createProductA() {
    return new ProductA1();
  }

  createProductB() {
    return new ProductB1();
  }
}

export class Factory2 implements Factory {
  createProductA() {
    return new ProductA2();
  }

  createProductB() {
    return new ProductB2();
  }
}
