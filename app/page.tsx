import { Suspense } from "react";

import { Products, ProductsSkeleton } from "@/components/features/products";

export default function Home() {
  return (
    <main className="flex-1 p-8">
      <h1 className="mb-6 text-2xl font-semibold">Produtos</h1>

      <Suspense fallback={<ProductsSkeleton />}>
        <Products />
      </Suspense>
    </main>
  );
}
