import CupImage from "@/assets/cup-with-headphone.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div
      className={`${styles.banner} container mx-auto border-2 border-white rounded-3xl mt-10 p-5 sm:p-8 md:p-10 lg:p-12`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left">
        <div className="px-4 md:px-8 lg:px-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Don&apos;t Miss Out on <br className="hidden md:block" /> These Unbeatable Black <br className="hidden lg:block" /> Friday Deals!
          </h1>
          <p className="py-3 text-sm sm:text-base md:text-lg lg:text-xl">
            Save big this Black Friday with unbeatable deals on tech, home essentials, fashion, and more! Limited Stock.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <Button className="rounded-full">Buy Now</Button>
            <Button className="rounded-full" variant="outline">All Products</Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={CupImage} alt="cupImage" className="w-56 sm:w-56 md:w-72 lg:w-96" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
