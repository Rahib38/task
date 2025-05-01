import CategorySection from "@/components/modules/home/category";
import FeatureProduct from "@/components/modules/home/FeatureProducts";
import HeroSection from "@/components/modules/home/heroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeatureProduct/>
    </div>
  );
};

export default HomePage;
