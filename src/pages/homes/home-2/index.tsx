import Products1 from "@/components/common/Products1";

import Features from "@/components/common/Features";
import Categories from "@/components/homes/home-2/Categories";
import Collections from "@/components/common/Collections3";
import Collections2 from "@/components/homes/home-2/Collections2";
import Hero from "@/components/homes/home-2/Hero";
import Lookbook from "@/components/homes/home-2/Lookbook";
import Products2 from "@/components/homes/home-2/Products2";
import Topbar1 from "@/components/headers/Topbar1";

import Testimonials from "@/components/common/Testimonials";
import Blogs from "@/components/common/Blogs";
import Shopgram from "@/components/homes/home-2/Shopgram";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 02 || Talukder Furniture - Office equipment",
  description: "Talukder Furniture - Office equipment", 
};

export default function Homepage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Hero />
      <Categories />
      <Collections />
      <Products1 cardStyle={2} />
      <Collections2 />
      <Products2 />
      <Lookbook />
      <Features parentClass="flat-spacing-2 line-top-container" />
      <Testimonials parentClass="flat-spacing-2 section-testimonials" />
      <Blogs parentClass="flat-spacing-2 section-news-insight" />
      <Shopgram />
      <Footer1 />
    </>
  );
}
