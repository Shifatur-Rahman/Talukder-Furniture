import Blogs from "@/components/common/Blogs";
import Collections from "@/components/common/Collections";
import Collections2 from "@/components/common/Collections2";
import Collections3 from "@/components/common/Collections3";
import Lookbook from "@/components/common/Lookbook";
import Products1 from "@/components/common/Products1";
import ShopGram from "@/components/common/ShopGram";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/home-5/Banner";
import Collections5 from "@/components/homes/home-5/Collections";

import Topbar2 from "@/components/headers/Topbar2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 05 || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function Homepage5() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar2 />
      <Header1 parentClass="header-default border-bot" />
      <Collections3 parentClass="slider-home5" />
      <Collections5 />
      <Products1 cardStyle={5} />
      <Lookbook />
      <Collections2 />
      <Banner />
      <Collections />
      <Blogs parentClass="flat-spacing-2 pt-0 section-news-insight" />
      <ShopGram />
      <Footer1 />
    </>
  );
}
