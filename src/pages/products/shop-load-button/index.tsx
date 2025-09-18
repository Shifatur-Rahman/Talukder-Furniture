import Products5 from "@/components/products/Products5";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function ShopLoadButtonPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products5 />
    </>
  );
}
