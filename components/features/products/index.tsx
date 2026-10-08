// products.tsx
import { getProducts } from "@/lib/api/products";
import { ProductCard } from "./product-card";
import { ProductsSkeleton } from "./products-skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductsTabs } from "./product-tabs";
import { Separator } from "@/components/ui/separator";

type ProductsProps = {
  all?: boolean;
}

export async function Products({ all }: ProductsProps) {
  const products = await getProducts();

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-14 py-8 md:py-10">
      <div className="flex items-center justify-center gap-10 sm:mx-10 sm:mb-2">
        <Separator className="flex-1" />
        <h2 className="text-xl md:text-2xl font-bold text-accent whitespace-nowrap">
          Produtos relacionados
        </h2>
        <Separator className="flex-1" />
      </div>

      {all ? (
        <span className="font-bold w-full flex justify-center">
          Ver todos
        </span>
      ) : (
        <ProductsTabs />
      )}

      <div className="relative">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="-ml-4 py-4">
            {products.map((product) => (
              <CarouselItem
                key={product.productName}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1 h-full">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:inline-flex -left-10 h-7 w-7 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] border-0" />
          <CarouselNext className="hidden md:inline-flex -right-10 h-7 w-7 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] border-0" />
        </Carousel>
      </div>
    </section>
  );
}

export { ProductsSkeleton };