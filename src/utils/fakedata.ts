export interface Product {
  id: number;
  title: string;
  date: string;
  info: string;
}

export function generateRandomDate(): string {
  const startDate = new Date(2016, 0, 1);
  const endDate = new Date(2024, 0, 1);
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return randomDate.toLocaleDateString("en-US", options);
}

export function generateProductsJSON(): Product[] {
  const products: Product[] = [];

  for (let i = 1; i <= 50; i++) {
    const product: Product = {
      id: i,
      title: `Product ${i}`,
      date: generateRandomDate(),
      info: `Description for Product ${i}.`,
    };
    products.push(product);
  }

  return products;
}
