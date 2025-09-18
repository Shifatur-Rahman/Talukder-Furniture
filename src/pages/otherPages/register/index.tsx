import Breadcumb from "@/components/common/Breadcumb";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Register from "@/components/otherPages/Register";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Register || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function RegisterPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-5.jpg"
        pageName="Account"
        pageTitle="Register"
        parentPage=""
      />
      <Register />
      <Footer1 />
    </>
  );
}
