import Navbar from "../components/layout/Navbar/Navbar";
import HeroSlider from "../components/Hero/HeroSlider";
import ServiceBenefits from "../components/Benefits/ServiceBenefits";
import CategorySection from "../components/Categories/CategorySection";
import DesignerCollection from "../components/Designer/DesignerCollection";

import { navigationData } from "../data/navigation.data";
import { heroData } from "../data/hero.data";
import { benefitsData } from "../data/benefits.data";
import { categoryData } from "../data/category.data";
import { designerData } from "../data/designer.data";

export default function Home() {
  return (
    <>
      <Navbar navigation={navigationData} />

      <main id="main-content">

        {/* SEO H1 */}
        <h1 className="sr-only">
          Next Steel Innovation - Steel Storage, Kitchen Organizers and Home
          Utility Products
        </h1>

        {/* Hero */}
        <HeroSlider slides={heroData} />

        {/* Benefits */}
        <ServiceBenefits benefits={benefitsData} />

        {/* Categories */}
        <CategorySection categories={categoryData} />

        {/* Designer Collection */}
        <DesignerCollection slides={designerData} />

        {/* Bathroom */}
       

      </main>
    </>
  );
}