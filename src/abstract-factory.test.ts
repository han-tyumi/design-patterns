import { Factory, Factory1, Factory2 } from "./abstract-factory";

function createApplication(factory: Factory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();
  return { productA, productB };
}

test("can be configured to use variant 1", () => {
  const { productA, productB } = createApplication(new Factory1());
  expect(productA.toString()).toBe("Product A1");
  expect(productB.toString()).toBe("Product B1");
  expect(productB.withProductA(productA)).toBe("Product B1 & Product A1");
});

test("can be configured to use variant 2", () => {
  const { productA, productB } = createApplication(new Factory2());
  expect(productA.toString()).toBe("Product A2");
  expect(productB.toString()).toBe("Product B2");
  expect(productB.withProductA(productA)).toBe("Product A2 & Product B2");
});
