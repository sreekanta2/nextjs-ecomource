import Banner from "@/components/banner";
import Brands from "@/components/brands";
import Features from "@/components/features";
import Products from "@/components/products";
import SideBanner from "@/components/sideBanner";

export default function Home() {
  return (
    <>
      <main>
        <SideBanner />
        <Brands />
        <Products />
        <Features />
        <Banner />
      </main>
    </>
  );
}
