import Breadcumb from "@/components/common/Breadcumb";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Order from "@/components/otherPages/Order";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Order || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function OrderPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-4.jpg"
        pageName="Order"
        pageTitle="Order"
        parentPage=""
      />
      <Order />
      <Footer1 />
    </>
  );
}
