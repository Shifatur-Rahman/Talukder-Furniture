import Breadcumb from "@/components/common/Breadcumb";
import OrderDetails from "@/components/dashboard/OrderDetails";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "My Acccount Order Details || Talukder Furniture - Office equipment",
  description: "Talukder Furniture - Office equipment",
};

export default function MyAccountOrdersDetails() {
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
      <OrderDetails />
      <Footer1 />
    </>
  );
}
