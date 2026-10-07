import { Product } from "@/types/product";

const BASE_URL =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia";

type ProductsResponse = {
  success: boolean;
  products: Product[];
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/lista-produtos/produtos.json`);

  if (!res.ok) {
    throw new Error("Falha ao buscar produtos");
  }

  const { products }: ProductsResponse = await res.json();
  return products;
}
