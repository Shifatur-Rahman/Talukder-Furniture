import Products4 from "@/components/products/Products4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function ShopFilterDropdownPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products4 />
    </>
  );
}
