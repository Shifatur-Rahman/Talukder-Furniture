import Products2 from "@/components/products/Products2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function ShopSidebarLeftPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products2 />
    </>
  );
}
