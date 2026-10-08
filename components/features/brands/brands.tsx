import Image from "next/image";

import { Container } from "@/components/ui/container";

const brands = [
  { name: "Converse", logo: "/Logo.png" },
  { name: "Converse", logo: "/Logo.png" },
  { name: "Converse", logo: "/Logo.png" },
  { name: "Converse", logo: "/Logo.png" },
  { name: "Converse", logo: "/Logo.png" },
];

export function Brands() {
  return (
    <section className="py-8 md:py-10">
      <Container>
        <h2 className="mb-8 text-center text-xl font-bold whitespace-nowrap text-accent md:text-2xl">
          Navegue por marcas
        </h2>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <li
              key={index}
              className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-card shadow-[0_2px_8px_rgba(0,0,0,0.15)] md:h-58 md:w-58"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={80}
                height={80}
                className="h-auto w-20 md:w-35"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
