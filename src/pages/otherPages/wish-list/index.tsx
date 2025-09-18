import Breadcumb from "@/components/common/Breadcumb";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import SimmilerProducts from "@/components/otherPages/SimmilerProducts";
import Wishlist from "@/components/otherPages/Wishlist";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Wish List || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function WishListPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-3.jpg"
        pageName="Wish List"
        pageTitle="Wish List"
        parentPage=""
      />
      <Wishlist />
      <SimmilerProducts />
      <Footer1 />
    </>
  );
}
