import { Builder } from "./builder";

/** Optional class to produce specific products using a given builder. */
export class Director {
  private builder?: Builder;

  constructor(builder?: Builder) {
    if (builder) {
      this.setBuilder(builder);
    }
  }

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  buildMinimalProduct() {
    this.assertBuilder();
    this.builder!.addPartA();
  }

  buildFullyLoadedProduct() {
    this.assertBuilder();
    this.builder!.addPartA().addPartB().addPartC();
  }

  private assertBuilder() {
    if (!this.builder) {
      throw new Error("Builder has not been set!");
    }
  }
}
