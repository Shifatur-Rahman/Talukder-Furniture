import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Contact from "@/components/otherPages/Contact";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Contact || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Contact />
      <Footer1 />
    </>
  );
}
