import Image from "next/image";

import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";
import { ProductDialog } from "./product-dialog";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
      <div className="relative aspect-square">
        <Image
          src={product.photo}
          alt={product.productName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <p className="mt-4 line-clamp-2 text-card-foreground">
          {product.descriptionShort}
        </p>

        <div className="mt-3">
          <span className="block text-muted-foreground line-through">
            R$ 30,90
          </span>

          <span className="block text-xl font-bold text-card-foreground">
            {formatPrice(product.price)}
          </span>

          <span className="block text-sm text-card-foreground">
            ou 2x R$ 14,95 sem juros
          </span>

          <span className="mt-2 block text-sm text-accent font-medium">
            Frete grátis
          </span>
        </div>

        <ProductDialog
          product={product}
          triggerClassName="mt-3 bg-accent text-secondary hover:bg-accent/90"
        />
      </div>
    </article>
  );
}