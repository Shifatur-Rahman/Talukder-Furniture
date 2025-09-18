import Breadcumb from "@/components/common/Breadcumb";
import Features3 from "@/components/common/Features3";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import StoreLocation from "@/components/otherPages/StoreLocation";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Store List || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function StoreListPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-8.jpg"
        pageName="Store List"
        pageTitle="Store List"
      />
      <StoreLocation />
      <Features3 parentClass="flat-spacing" />
      <Footer1 />
    </>
  );
}
