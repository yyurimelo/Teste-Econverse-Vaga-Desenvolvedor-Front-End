import { getProducts } from "@/lib/api/products";
import { ProductCard } from "./product-card";
import { ProductsSkeleton } from "./products-skeleton";

export async function Products() {
  const products = await getProducts();

  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <li key={product.productName}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export { ProductsSkeleton };
