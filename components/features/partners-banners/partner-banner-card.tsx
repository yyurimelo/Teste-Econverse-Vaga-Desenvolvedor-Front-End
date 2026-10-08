import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type PartnerBannerCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaLabel?: string;
};

export function PartnerBannerCard({
  title,
  description,
  image,
  href,
  ctaLabel = "Confira",
}: PartnerBannerCardProps) {
  return (
    <div className="relative min-h-[25rem] w-full overflow-hidden rounded-4xl">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/100" />
      <div className="relative flex h-[400px] flex-col overflow-hidden">

        <div className="relative z-10 flex h-full flex-col items-start justify-end gap-6 px-8 py-12 text-white">
          <h3 className="text-3xl font-bold md:text-5xl">{title}</h3>

          <p className="w-[180px] text-md leading-snug">{description}</p>

          <Button className="mt-1 rounded-md px-10 py-6 text-md font-bold uppercase tracking-wide text-purple transition-colors hover:bg-yellow-300">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}