import { Builder1 } from "./builder";
import { Director } from "./director";

test("will build a minimal product", () => {
  const builder = new Builder1();
  const director = new Director(builder);

  director.buildMinimalProduct();

  const product = builder.getProduct();
  expect(product.toString()).toBe("Part A");
});

test("will build a fully loaded product", () => {
  const builder = new Builder1();
  const director = new Director(builder);

  director.buildFullyLoadedProduct();

  const product = builder.getProduct();
  expect(product.toString()).toBe("Part A, Part B, Part C");
});
