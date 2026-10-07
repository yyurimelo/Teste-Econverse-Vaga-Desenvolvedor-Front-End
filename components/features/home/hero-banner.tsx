import Image from "next/image";

import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-muted h-[380px] md:h-[450px]">
      <Image
        src="/black-friday-wallpaper.jpg"
        alt="Produtos em promoção nas prateleiras da Econverse"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-transparent" />

      <div className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center gap-3 px-2 py-12 md:gap-4">
        <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] text-white md:text-6xl">
          Venha conhecer nossas
          promoções
        </h2>

        <p className="text-lg text-white md:text-4xl">
          <span className="font-bold text-primary">50% Off</span>
          <span> nos produtos</span>
        </p>

        <div className="pt-3">
          <Button className="h-12 w-46 px-8 font-bold">
            Ver produto
          </Button>
        </div>
      </div>
    </section>
  )
}
