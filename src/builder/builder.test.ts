import { Builder1 } from "./builder";

test("can build a product", () => {
  const builder = new Builder1();
  const product = builder.addPartA().addPartC().getProduct();

  expect(product.toString()).toBe("Part A, Part C");
});

test("can build multiple products", () => {
  const builder = new Builder1();
  const product1A = builder.addPartA().addPartA().getProduct();
  const product1B = builder.addPartC().addPartB().getProduct();

  expect(product1A.toString()).toBe("Part A, Part A");
  expect(product1B.toString()).toBe("Part C, Part B");
});

test("can handle resets", () => {
  const builder = new Builder1();
  const product = builder
    .addPartA()
    .addPartB()
    .addPartC()
    .reset()
    .addPartB()
    .getProduct();

  expect(product.toString()).toBe("Part B");
});
