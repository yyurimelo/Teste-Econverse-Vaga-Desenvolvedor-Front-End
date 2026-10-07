"use client";

import Image from "next/image";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";

type ProductDialogProps = {
  product: Product;
  triggerLabel?: string;
  triggerClassName?: string;
};

export function ProductDialog({
  product,
  triggerLabel = "COMPRAR",
  triggerClassName,
}: ProductDialogProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Dialog>
      <DialogTrigger render={<Button className={cn("h-12", triggerClassName)} size="lg" />}>
        {triggerLabel}
      </DialogTrigger>

      <DialogContent className="gap-0 overflow-hidden rounded-md bg-popover p-0 sm:max-w-[620px]">
        <div className="grid grid-cols-1 items-center sm:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-[260px] bg-popover sm:max-w-none">
            <Image
              src={product.photo}
              alt={product.productName}
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-contain p-10 sm:p-12"
            />
          </div>

          <div className="flex flex-col py-12 pl-2 pr-14 max-sm:px-6 max-sm:pt-0">
            <DialogTitle className="text-lg font-normal uppercase leading-tight tracking-normal text-card-foreground">
              {product.productName}
            </DialogTitle>

            <p className="mt-1 text-lg font-bold text-card-foreground">
              {formatPrice(product.price)}
            </p>

            <DialogDescription className="mt-5 text-[10px] leading-snug text-muted-foreground">
              Many desktop publishing packages and web page editors now many desktop publishing
            </DialogDescription>

            <button
              type="button"
              className="mt-1 self-start text-[10px] font-bold text-accent hover:underline"
            >
              Veja mais detalhes do produto &gt;
            </button>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex h-8 w-[88px] shrink-0 items-center justify-between rounded-sm border border-border px-1">
                <button
                  type="button"
                  aria-label="Diminuir quantidade"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="flex size-5 items-center justify-center text-foreground transition-opacity hover:opacity-70 disabled:opacity-40"
                >
                  <MinusIcon className="size-3.5" strokeWidth={1.5} />
                </button>

                <span className="text-[11px] font-semibold tabular-nums text-foreground">
                  {String(quantity).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  aria-label="Aumentar quantidade"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex size-5 items-center justify-center text-foreground transition-opacity hover:opacity-70"
                >
                  <PlusIcon className="size-3.5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Botão */}
              <Button
                className="h-8 flex-1 rounded-sm bg-primary text-[11px] font-bold uppercase text-primary-foreground hover:bg-primary/90"
              >
                COMPRAR
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}