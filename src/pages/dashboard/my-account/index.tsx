import Breadcumb from "@/components/common/Breadcumb";
import MyAccount from "@/components/dashboard/MyAccount";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "My Account || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function MyAccountPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-7.jpg"
        pageName="My Account"
        pageTitle="My Account"
      />
      <div className="btn-sidebar-account">
        <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
          <i className="icon icon-squaresfour"></i>
        </button>
      </div>
      <MyAccount />
      <Footer1 />
    </>
  );
}
