import Breadcumb from "@/components/common/Breadcumb";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import About from "@/components/otherPages/About";
import Benefit from "@/components/otherPages/Benefit";
import Team from "@/components/otherPages/Team";
import Testimonials from "@/components/otherPages/Testimonials";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "About Us || Talukder Furniture",
  description: "Talukder - Office equipment",
};

export default function AboutPage() { 
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb />
      <About />
      <Benefit />
      <Testimonials />
      <Team />
      <Footer1 />
    </>
  );
}
