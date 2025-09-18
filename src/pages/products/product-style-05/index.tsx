import Products1 from "@/components/products/Products1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function ProductStylePage5() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products1 cardStyle={5} />
    </>
  );
}
