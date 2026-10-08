import { Container } from "@/components/ui/container";

import { PartnerBannerCard } from "./partner-banner-card";

const banners = [
  {
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: "/partners.png",
    href: "/parceiros",
  },
  {
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: "/partners.png",
    href: "/parceiros",
  },
];

export function PartnersBanners() {
  return (
    <section className="py-6">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {banners.map((banner, index) => (
            <PartnerBannerCard key={index} {...banner} />
          ))}
        </div>
      </Container>
    </section>
  );
}