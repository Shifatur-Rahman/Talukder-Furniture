import Breadcumb from "@/components/common/Breadcumb";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import RelatedProducts from "@/components/otherPages/RelatedProducts";
import ShopCart from "@/components/otherPages/ShopCart";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shopping Cart || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function ShppingCartPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-3.jpg"
        pageName="Shopping Cart"
        pageTitle="Shopping Cart"
        parentPage=""
      />
      <ShopCart />
      <RelatedProducts />
      <Footer1 />
    </>
  );
}
