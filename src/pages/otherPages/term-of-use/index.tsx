import Breadcumb from "@/components/common/Breadcumb";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Terms from "@/components/otherPages/Terms";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Term Of Use || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function TermsOfUsePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-7.jpg"
        pageName="Terms Of Use"
        pageTitle="Terms Of Use"
      />
      <Terms />
      <Footer1 />
    </>
  );
}
