import Products3 from "@/components/products/Products3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function ShopSidebarRightPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products3 />
    </>
  );
}
