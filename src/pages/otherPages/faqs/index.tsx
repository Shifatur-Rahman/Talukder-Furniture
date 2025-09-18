import Breadcumb from "@/components/common/Breadcumb";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Faqs from "@/components/otherPages/Faqs";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Faqs || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function FaqsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-7.jpg"
        pageName="Faqs"
        pageTitle="Faqs"
      />

      <Faqs />
      <Footer1 />
    </>
  );
}
