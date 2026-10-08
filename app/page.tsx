import { Categories } from "@/components/features/home/categories";
import { homeCategories } from "@/components/features/home/categories-data";
import { HeroBanner } from "@/components/features/home/hero-banner";
import { Products } from "@/components/features/products";
import { Header } from "@/components/shared/header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Categories categories={homeCategories} initialActiveName="Tecnologia" />
      <Products />
    </>
  );
}
