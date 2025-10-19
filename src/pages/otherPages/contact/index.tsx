import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Contact from "@/components/otherPages/Contact";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Contact || Talukder Furniture - Office equipment",
  description: "Talukder Furniture - Office equipment",
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
