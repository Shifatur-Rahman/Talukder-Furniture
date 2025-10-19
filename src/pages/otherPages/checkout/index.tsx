import Breadcumb from "@/components/common/Breadcumb";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Checkout from "@/components/otherPages/Checkout";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Checkout || Talukder Furniture - Office equipment",
  description: "Talukder Furniture - Office equipment",
};

export default function CheckoutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-4.jpg"
        pageName="Check Out"
        pageTitle="Check Out"
        parentPage=""
      />
      <Checkout /> 
      <Footer1 /> 
    </>
  );
}
