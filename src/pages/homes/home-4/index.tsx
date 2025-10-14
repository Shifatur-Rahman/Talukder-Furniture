import Blogs from "@/components/common/Blogs";
import Categories from "@/components/common/Categories";
// import Second from "@/components/common/Second";
import Collections from "@/components/common/Collections";
import Features2 from "@/components/common/Features2";
import Products2 from "@/components/common/Products2";
import ShopGram from "@/components/common/ShopGram";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Collections2 from "@/components/homes/home-4/Collections2";
import Hero from "@/components/homes/home-4/Hero";
import Lookbook from "@/components/homes/home-4/Lookbook";
import Testimonials from "@/components/homes/home-4/Testimonials";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 04 || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function Homepage4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Hero />
      <Categories />
      {/* <Second /> */}
      <Products2 parentClass="flat-spacing-5 pt-0" />
      <Features2 />
      <Collections parentClass="flat-spacing-2" />
      <Lookbook />
      <Testimonials />
      <Collections2 />
      <Blogs parentClass="flat-spacing-2 section-news-insight" />
      <ShopGram />
      <Footer1 />
    </>
  );
}
